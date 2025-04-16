const mongoose = require('mongoose');
const csv = require('csvtojson');
const path = require('path');

// 
mongoose.connect('mongodb+srv://amirrezaa:9ZzXg99c29oBGFiO@cluster0.n6ptk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// 
const solarSchema = new mongoose.Schema({
  timestamp: Date,
  Active_Energy_Delivered_Received: Number,
  Current_Phase_Average: Number,
  Active_Power: Number,
  Wind_Speed: Number,
  Weather_Temperature_Celsius: Number,
  Weather_Relative_Humidity: Number,
  Global_Horizontal_Radiation: Number,
  Diffuse_Horizontal_Radiation: Number,
  Wind_Direction: Number,
  Weather_Daily_Rainfall: Number,
  Radiation_Global_Tilted: Number,
  Radiation_Diffuse_Tilted: Number,
});

const SolarData = mongoose.model('SolarData', solarSchema);

// 
const csvFilePath = 'C:/Users/Amir/Desktop/SolarSense/SDs20132023.csv';

// 
csv()
  .fromFile(csvFilePath)
  .then(async (jsonObj) => {
    try {
      await SolarData.insertMany(jsonObj);
      console.log('✅ submission successful!');
      mongoose.disconnect();
    } catch (err) {
      console.error('❌error:', err);
    }
  });
