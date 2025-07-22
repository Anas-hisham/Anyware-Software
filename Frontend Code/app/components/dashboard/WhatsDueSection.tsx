import React from "react";
import { WhatsDueItem } from "../../types";

type WhatsDueSectionProps = {
  whatsDue: WhatsDueItem[];
  loading: boolean;
  error: string | null;
};

const WhatsDueSection: React.FC<WhatsDueSectionProps> = ({
  whatsDue,
  loading,
  error,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">What's due</h3>
        <a href="#" className="text-blue-600 hover:underline">
          All
        </a>
      </div>
      <div>
        {loading && (
          <p className="text-center text-gray-500">Loading assignments...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && whatsDue.length === 0 && !error && (
          <p className="text-center text-gray-500">
            No assignments or quizzes due.
          </p>
        )}
        {whatsDue.map((item, index) => (
          <div
            key={index}
            className="mb-4 pb-4 border-b border-gray-200 last:border-b-0"
          >
            <p className="font-semibold text-gray-800">{item.type}</p>
            <p className="text-sm text-gray-600">{item.course}</p>
            <p className="text-sm text-gray-600 mb-2">{item.topic}</p>
            <p className="text-xs text-gray-500 mb-3">{item.date}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsDueSection;
