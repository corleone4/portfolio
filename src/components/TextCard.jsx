import React from "react";
//
export default function ImageCard({ title, description }) {
  return (
    <div className="relative flex flex-col my-6 bg-white dark:bg-gray-800 dark:text-gray-300 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg w-96">
      <div className="relative h-65 m-2.5 overflow-hidden text-white rounded-md">
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 dark:text-gray-100 text-xl font-semibold">
            {title}
          </h6>
          <p className="text-slate-600 dark:text-gray-300 leading-normal font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
