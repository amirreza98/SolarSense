from collections import Counter
from datetime import datetime, timedelta

def compute_system_status(docs):
    """
    تعیین وضعیت کلی سیستم بر اساس فالت‌های اخیر
    """
    now = datetime.utcnow()
    recent_faults = [
        d for d in docs
        if "severity" in d and "timestamp" in d
        and datetime.fromisoformat(d["timestamp"].replace("Z", "+00:00")) > now - timedelta(hours=24)
    ]

    high = sum(1 for d in recent_faults if d["severity"] == "High")
    medium = sum(1 for d in recent_faults if d["severity"] == "Medium")
    low = sum(1 for d in recent_faults if d["severity"] == "Low")

    if high > 0:
        status = "Fault"
    elif medium > 0 or low > 1:
        status = "Warning"
    else:
        status = "Operational"

    # آخرین فالت اخیر
    latest_fault = None
    if recent_faults:
        latest_fault = max(recent_faults, key=lambda d: d["timestamp"])

    return {
        "status": status,
        "last_fault": latest_fault.get("fault_label") if latest_fault else None,
        "severity": latest_fault.get("severity") if latest_fault else None,
        "timestamp": latest_fault.get("timestamp") if latest_fault else None
    }

def count_faults_by_severity(docs):
    counter = Counter(d.get("severity", "Unknown") for d in docs)
    return dict(counter)

def count_faults_by_location(docs):
    counter = Counter(d.get("location", "Unknown") for d in docs)
    return dict(counter)

def most_common_fault_label(docs):
    counter = Counter(d.get("fault_label", "Unknown") for d in docs)
    if counter:
        most_common = counter.most_common(1)[0]
        return {"fault_label": most_common[0], "count": most_common[1]}
    return {"fault_label": None, "count": 0}

def generate_system_summary(docs):
    return {
        "system_status": compute_system_status(docs),
        "faults_by_severity": count_faults_by_severity(docs),
        "faults_by_location": count_faults_by_location(docs),
        "most_common_fault": most_common_fault_label(docs)
    }
