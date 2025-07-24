from fastapi import APIRouter, Query
from typing import List
from db import get_all_docs
from faultDetector import process_all_documents
from bson import ObjectId

router = APIRouter()

@router.get("/all-documents")
def get_data(limit: int = Query(10, gt=0, le=30000)):
    data = get_all_docs(limit)
    return {"raw data": data}

@router.get("/faults")
def get_faults(limit: int = Query(10, gt=0, le=1000)):
    data = process_all_documents(get_all_docs)[:limit]
    return data



# # @router.get("/faults")
# def get_all_faults():
#     """کل داکیومنت‌هایی که فالت دارند"""
#     docs = get_all_docs()
#     faults = process_all_documents(docs)
#     return faults

# @router.get("/faults/latest")
# def get_latest_faults(limit: int = 10):
#     """آخرین n تا فالت (پیش‌فرض ۱۰)"""
#     docs = get_all_docs()
#     faults = process_all_documents(docs)
#     # فرض کنیم داکیومنت‌ها مرتب بر اساس timestamp هستند؛ اگر نه، باید مرتب‌سازی کنی
#     faults_sorted = sorted(faults, key=lambda d: d.get("timestamp", ""), reverse=True)
#     return faults_sorted[:limit]
