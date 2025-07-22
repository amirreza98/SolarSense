# main.py
import time
from modbus_reader import read_data
from fault_detector import detect_fault

while True:
    data = read_data()
    if data:
        faults = detect_fault(data)
        # log_data(data, faults)
        print("✅ Logged:", data, "Faults:", faults)
    else:
        print("⚠️ Failed to read from Modbus")
    time.sleep(5) 
