import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import ChartRecharts from "../../components/ChartRecharts";

function flattenData(dataArray) {
  return dataArray.map(item => {
    const flatItem = { timestamp: item.timestamp };
    
    // فیلدهای ولتاژ و جریان رو باز کن
    ['voltage_inverter_output', 'voltage_load_input', 'voltage_line_in', 'voltage_line_out',
     'current_inverter_output', 'current_load_input', 'current_line_in', 'current_line_out'].forEach(key => {
      if (item[key]) {
        flatItem[`${key}_a`] = item[key].a;
        flatItem[`${key}_b`] = item[key].b;
        flatItem[`${key}_c`] = item[key].c;
      }
    });

    // فیلدهای فرکانس رو مستقیم کپی کن
    ['frequency_main_bus', 'frequency_grid', 'frequency_line_in', 'frequency_line_out', 'fault_event'].forEach(key => {
      if (item[key] !== undefined) {
        flatItem[key] = item[key];
      }
    });

    return flatItem;
  });
}


const linesToShow = [
  "voltage_inverter_output_a", "voltage_inverter_output_b", "voltage_inverter_output_c",
  "current_inverter_output_a", "current_inverter_output_b", "current_inverter_output_c",
  "frequency_main_bus"
];

function InteractiveCharts() {
  const isMobile = useIsMobile();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // تعیین خطوطی که می‌خوای رسم کنی
  // مثلا ولتاژ فاز A و جریان فاز A
  // اینها رو می‌تونی دستی تغییر بدی بر اساس داده‌هات
  const linesToShow = isMobile
    ? ["voltage_inverter_output_a"]   // روی موبایل فقط یه خط بکش
    : [  "voltage_inverter_output_a", "voltage_inverter_output_b", "voltage_inverter_output_c",
  "current_inverter_output_a", "current_inverter_output_b", "current_inverter_output_c",
  "frequency_main_bus"]; // روی دسکتاپ چندتا پارامتر

  useEffect(() => {
    fetch("./microgrid_dummy_data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        const flattenedData = flattenData(jsonData);
        setData(flattenedData);  // اینجا داده فلت شده رو بذار
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setLoading(false);
      });
  }, []);


  return (
    <motion.div
      className="h-screen lg:col-span-2 md:col-span-1 w-full flex"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xs md:text-xl font-semibold mb-4">Interactive Charts Panel</h2>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ChartRecharts data={data} lines={linesToShow} />
        )}
      </div>
    </motion.div>
  );
}

export default InteractiveCharts;
