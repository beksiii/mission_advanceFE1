import React, { useState } from "react";

const tabs = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

const Tabs = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-6 text-xs md:text-[16px] font-medium whitespace-nowrap px-1 md:px-0 flex-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`relative pb-2 transition-colors shrink-0 ${
              activeTab === tab
                ? "text-red-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-0.5 w-full h-[3px] bg-red-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
