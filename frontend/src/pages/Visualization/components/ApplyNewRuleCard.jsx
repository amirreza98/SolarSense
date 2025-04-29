import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const ApplyNewRuleCard = () => {
  const [showNote, setShowNote] = useState(false);
  const [formula1, setFormula1] = useState("inverterη . panelη . G . A = PAC");
  const [formula2, setFormula2] = useState("η = Pout / Pin");

  return (
    <div className="relative flex flex-col items-center">
      {/* دکمه بعلاوه */}
      <button
        onClick={() => setShowNote(!showNote)}
        className="flex absolute -top-36 left-4 gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm shadow"
      >
        <Plus size={25} />
        {/* Apply New Rule */}
      </button>


      {showNote && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -top-24 left-4 w-64 bg-white border border-gray-300 p-4 rounded-lg shadow-xl z-10"
        >
          <p className="text-sm font-semibold mb-2">Editable Solar Panel Formulas:</p>

          <textarea
            className="w-full border p-1 text-sm mb-2 rounded"
            value={formula1}
            onChange={(e) => setFormula1(e.target.value)}
          />
          <textarea
            className="w-full border p-1 text-sm mb-2 rounded"
            value={formula2}
            onChange={(e) => setFormula2(e.target.value)}
          />

          <button
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-sm"
            onClick={() => {
              console.log("Saved formulas:", formula1, formula2);
              setShowNote(false);
            }}
          >
            Save
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ApplyNewRuleCard;
