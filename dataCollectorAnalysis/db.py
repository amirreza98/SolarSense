import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["MGDataBase"]  # اسم دیتابیس واقعی‌ات
collection = db["MGCollection"]  # اسم کالکشنت

def get_all_docs(limit=30000):
    return list(collection.find({}, {"_id": 0}).limit(limit))  # برگرداندن حداکثر 1000 داکیومنت