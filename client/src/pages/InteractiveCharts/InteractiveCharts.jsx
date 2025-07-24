import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import ChartRechartsArea from "../../components/ChartRechartsArea";

// ---- تابع نرمال‌سازی داده‌ها ----
function normalizeData(dataArray, lines) {
  const maxValues = {};
  lines.forEach((key) => {
    maxValues[key] = Math.max(...dataArray.map((item) => item[key] || 0));
  });
  return dataArray.map((item) => {
    const newItem = { ...item };
    lines.forEach((key) => {
      if (item[key] !== undefined && maxValues[key] > 0) {
        newItem[key] = item[key] / maxValues[key];
      } else {
        newItem[key] = 0;
      }
    });
    return newItem;
  });
}

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
  const [granularity, setGranularity] = useState("minute");
  const [availableLines, setAvailableLines] = useState([]); // ← همه‌ی پارامترهای موجود
  const [selectedLines, setSelectedLines] = useState([]); // ← پارامترهایی که چک شدن

  useEffect(() => {
    fetch("http://localhost:8000/faults?limit=500")
      .then((res) => res.json())
      .then((jsonData) => {
        if (!Array.isArray(jsonData)) jsonData = [jsonData]; // اگه بک فقط یه آبجکت برگردوند
        setData(jsonData);

        const keys = Object.keys(jsonData[0] || {}).filter(
          (key) => typeof jsonData[0][key] === "number"
        ); // فقط عددی‌ها
        setAvailableLines(keys);

        // انتخاب پیش‌فرض:
        const defaultSelection = isMobile ? [keys[0]] : keys.slice(0, 4);
        setSelectedLines(defaultSelection);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // پردازش داده برای چارت
  const processedData = useMemo(() => {
    const normalized = normalizeData(data, selectedLines);
    return aggregateData(normalized, granularity, selectedLines);
  }, [data, selectedLines, granularity]);

  // چک کردن یا برداشتن چک
  const handleCheckboxChange = (line) => {
    setSelectedLines((prev) =>
      prev.includes(line) ? prev.filter((l) => l !== line) : [...prev, line]
    );
  };

  return (
    <motion.div
      className="h-full lg:col-span-2 md:col-span-1 w-full flex"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 overflow-auto">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xs md:text-xl font-semibold">Interactive Charts Panel</h2>
          <select
            value={granularity}
            onChange={(e) => setGranularity(e.target.value)}
            className="h-10 rounded border px-2"
          >
            <option value="minute">دقیقه‌ای</option>
            <option value="hour">ساعتی</option>
            <option value="day">روزانه</option>
          </select>
        </div>

        {/* چک‌باکس‌ها */}
        <div className="flex flex-wrap gap-3">
          {availableLines.map((line) => (
            <label key={line} className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={selectedLines.includes(line)}
                onChange={() => handleCheckboxChange(line)}
                className="accent-blue-500"
              />
              {line}
            </label>
          ))}
        </div>

        {/* چارت */}
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ChartRechartsArea data={processedData} lines={selectedLines} granularity={granularity} />
        )}
      </div>
    </motion.div>
  );
}

export default InteractiveCharts;

// تابع aggregateData هم همونه که داشتی و لازم نیست عوض بشه
