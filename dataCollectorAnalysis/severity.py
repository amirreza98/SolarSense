def calculate_severity(doc):
    """
    محاسبه شدت فالت (Low, Medium, High) بر اساس deviation و نوع fault
    """
    fault_label = doc.get("fault_label", "").lower()
    severity_score = 0

    # ------------------------------
    # 1. ولتاژ
    for key in ['Va_rms', 'Vb_rms', 'Vc_rms']:
        val = doc.get(key)
        if val is not None:
            severity_score += abs(val - 400) / 50  # نرمال ولتاژ رو 400V در نظر گرفتیم

    # ------------------------------
    # 2. جریان
    for key in ['Ia_rms', 'Ib_rms', 'Ic_rms']:
        val = doc.get(key)
        if val is not None:
            severity_score += abs(val - 10) / 10  # نرمال جریان رو 10A فرض کردیم

    # ------------------------------
    # 3. فرکانس
    freq = doc.get("freq")
    if freq is not None:
        severity_score += abs(freq - 50) / 0.2  # هر 0.2Hz انحراف = 1 امتیاز

    # ------------------------------
    # 4. وزن اولیه بر اساس نوع فالت
    fault_weight_map = {
        "overvoltage": 2,
        "undervoltage": 2,
        "overcurrent": 2,
        "frequency deviation": 1,
        "phase imbalance": 2.5,
        "line open fault": 3,
        "line short fault": 4
    }

    for key in fault_weight_map:
        if key in fault_label:
            severity_score += fault_weight_map[key]
            break

    # ------------------------------
    # 5. دسته‌بندی شدت
    if severity_score >= 8:
        return "High"
    elif severity_score >= 4:
        return "Medium"
    else:
        return "Low"
