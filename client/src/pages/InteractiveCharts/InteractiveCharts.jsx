import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import ChartRechartsArea from "../../components/ChartRechartsArea";


function normalizeData(dataArray, lines) {
  const maxValues = {};

  // مقدار ماکزیمم هر پارامتر رو پیدا کن
  lines.forEach((key) => {
    maxValues[key] = Math.max(...dataArray.map(item => item[key] || 0));
  });

  // مقیاس‌گذاری مقادیر به صورت نسبی
  return dataArray.map(item => {
    const newItem = { ...item };
    lines.forEach(key => {
      if (item[key] !== undefined && maxValues[key] > 0) {
        newItem[key] = item[key] / maxValues[key];
      } else {
        newItem[key] = 0; // اگر مقدار صفر یا undefined بود
      }
    });
    return newItem;
  });
}

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

function aggregateData(data, granularity, lines) {
  const grouped = {};

  data.forEach(item => {
    const date = new Date(item.timestamp);
    let key;
    if (granularity === 'day') {
      key = date.toISOString().slice(0, 10); // YYYY-MM-DD
    } else if (granularity === 'hour') {
      key = date.toISOString().slice(0, 13); // YYYY-MM-DDTHH
    } else {
      key = item.timestamp; // دقیقه‌ای
    }

    if (!grouped[key]) {
      grouped[key] = { count: 0, timestamp: key };
      lines.forEach(line => {
        grouped[key][line] = 0;
      });
    }

    grouped[key].count += 1;
    lines.forEach(line => {
      grouped[key][line] += item[line] || 0;
    });
  });

  return Object.values(grouped).map(entry => {
    const averaged = { timestamp: entry.timestamp };
    lines.forEach(line => {
      averaged[line] = entry[line] / entry.count;
    });
    return averaged;
  });
}



function InteractiveCharts() {
  const isMobile = useIsMobile();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [granularity, setGranularity] = useState("minute"); // "minute", "hour", "day"

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
        const normalizedData = normalizeData(flattenedData, linesToShow);
        setData(normalizedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setLoading(false);
      });
  }, []);

  const processedData = useMemo(() => {
  const normalized = normalizeData(flattenData(data), linesToShow);
  return aggregateData(normalized, granularity, linesToShow);
  }, [data, granularity]);

  return (
    <motion.div
      className="h-full lg:col-span-2 md:col-span-1 w-full flex"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md flex flex-wrap">
          <h2 className="text-xs md:text-xl font-semibold mb-4">Interactive Charts Panel</h2>
          <select
            value={granularity}
            onChange={(e) => setGranularity(e.target.value)}
            className="h-10 mx-5 rounded border"
          >
            <option value="minute">دقیقه‌ای</option>
            <option value="hour">ساعتی</option>
            <option value="day">روزانه</option>
          </select>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ChartRechartsArea data={processedData} lines={linesToShow} granularity={granularity} />
        )}
      </div>
    </motion.div>
  );
}

export default InteractiveCharts;
