def detect_fault(data):
    faults = []
    if data["soc"] < 20:
        faults.append("Low battery")
    if data["voltage"] > 52:
        faults.append("Overvoltage")
    return faults