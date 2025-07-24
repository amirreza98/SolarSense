from fastapi import FastAPI
from api.faults_api import router as faults_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(faults_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # این یعنی همه جا اجازه دارن وصل بشن (برای تست خوبه)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
