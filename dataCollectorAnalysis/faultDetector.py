# fault_detection.py

from db import get_all_docs  # فرض می‌کنیم این تابع همه داکیومنت‌ها رو از دیتابیس برمی‌گردونه

def detect_overvoltage_undervoltage(doc):
    for key in ['Va_rms', 'Vb_rms', 'Vc_rms']:
        val = doc.get(key)
        if val is not None:
            if val < 300:
                return f"Undervoltage on {key}"
            if val > 440:
                return f"Overvoltage on {key}"
    return None

def detect_overcurrent(doc):
    for key in ['Ia_rms', 'Ib_rms', 'Ic_rms']:
        val = doc.get(key)
        if val is not None:
            if val > 20:
                return f"Overcurrent on {key}"
    return None

def detect_frequency_deviation(doc):
    freq = doc.get('freq')
    if freq is not None:
        if freq < 49.8 or freq > 50.2:
            return f"Frequency deviation: {freq} Hz"
    return None

def detect_phase_imbalance(doc):
    voltages = []
    for key in ['Va_rms', 'Vb_rms', 'Vc_rms']:
        val = doc.get(key)
        if val is not None:
            voltages.append(val)
    if len(voltages) == 3:
        if max(voltages) - min(voltages) > 30:
            return "Phase imbalance detected"
    return None

def detect_line_fault(doc):
    # Check Open Fault
    for v_key, i_key in zip(['Va_rms', 'Vb_rms', 'Vc_rms'], ['Ia_rms', 'Ib_rms', 'Ic_rms']):
        voltage = doc.get(v_key)
        current = doc.get(i_key)
        if voltage is not None and current is not None:
            if current == 0 and voltage < 100:
                return f"Line Open Fault on phase {v_key[-5]}"
            if current > 40 and voltage < 150:
                return f"Line Short Fault on phase {v_key[-5]}"
    return None

def process_all_documents(get_all_docs):
    results = []
    for doc in get_all_docs():
        fault = (
            detect_overvoltage_undervoltage(doc) or
            detect_overcurrent(doc) or
            detect_frequency_deviation(doc) or
            detect_phase_imbalance(doc) or
            detect_line_fault(doc)
        )
        if fault:
            doc['fault_label'] = fault
            results.append(doc)
    return results
