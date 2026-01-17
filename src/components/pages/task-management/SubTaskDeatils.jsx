"use client";
import { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import {
  subTaskTableColumns,
  subTaskTableData,
} from "../../../config/subTaskList";
import AddSubTaskModal from "./AddsubTaskModal";

export default function SubTaskDetails() {
  const [openAddSubTask, setOpenAddSubTask] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* Header */}
        <h2 className="text-base sm:text-lg font-semibold">
          Sub Task List
        </h2>

        <div className="bg-white rounded-2xl">
          {/* Top bar */}
          <div
            className="
              flex flex-col gap-3 
              sm:flex-row sm:items-center sm:justify-between 
              p-4
            "
          >
            <Input
              placeholder="Search here"
              icon="ri-search-line"
              className="
                w-full h-11
                sm:w-[290px]
                border border-gray-300 
                rounded-md 
                px-3 py-2 
                text-sm
              "
            />

            {/* OPEN MODAL */}
            <Button
              className="bg-blue-600 w-[190px] text-white"
              onClick={() => setOpenAddSubTask(true)}
            >
              + Add Sub Task
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <BasicTable
              columns={subTaskTableColumns}
              data={subTaskTableData}
              pagination
              total={1234}
              pageSize={10}
              wrapperClassName="rounded-b-2xl"
            />
          </div>
        </div>
      </div>

      <AddSubTaskModal
        open={openAddSubTask}
        onClose={() => setOpenAddSubTask(false)}
      />
    </>
  );
}
