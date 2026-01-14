"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import {
  departmentColumns,
  departmentData,
  departmentActions,
} from "../../../config/departments";

import AddDepartmentModal from "./AddDepartmentModal";

export default function Department() {
  const [data, setData] = useState(departmentData);
  const [open, setOpen] = useState(false);

  const toggleStatus = (index) => {
    const newData = [...data];
    newData[index].status = !newData[index].status;
    setData(newData);
  };

  const columns = departmentColumns.map((col) => {
    if (col.key === "status") {
      return {
        ...col,
        render: (_, row, index) => (
          <button
            onClick={() => toggleStatus(index)}
            className={`w-9 h-5 rounded-full relative transition ${
              row.status ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${
                row.status ? "translate-x-4" : ""
              }`}
            />
          </button>
        ),
      };
    }
    return col;
  });

  return (

    <div className="mt-7">
      <h2 className="text-base sm:text-lg font-semibold mb-4">Department</h2>
    
    <div>
      

      {/* Top Bar */}
      <div className="flex bg-white p-4 sm:p-6 rounded-t-2xl border border-gray-200 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-72">
          <Input
            icon="ri-search-line text-gray-400"
            placeholder="Search here"
            className="w-full h-10 border border-gray-300"
          />
        </div>

        <Button
          variant="danger"
          className="w-full sm:w-auto h-10"
          onClick={() => setOpen(true)}
        >
          + Add Department
        </Button>
      </div>

      {/* Table Wrapper for Mobile Scroll */}
      <div className="w-full overflow-x-auto">
        <BasicTable
          columns={columns}
          data={data}
          actions={departmentActions}
          wrapperClassName="rounded-b-2xl"
          pagination
          pageSize={10}
          total={data.length}
        />
      </div>

      <AddDepartmentModal open={open} onClose={() => setOpen(false)} />
    </div>
    </div>
  );
}
