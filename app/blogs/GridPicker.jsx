"use client"
import React, { useState } from 'react'

function GridPicker() {
      const [layout, setLayout] = useState("grid"); // "grid" or "list"
  return (
    <div className="flex justify-center mb-4">
        <button
          onClick={() => setLayout("grid")}
          className={`px-4 py-2 rounded-l-md ${
            layout === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setLayout("list")}
          className={`px-4 py-2 rounded-r-md ${
            layout === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          List
        </button>
      </div>
  )
}

export default GridPicker