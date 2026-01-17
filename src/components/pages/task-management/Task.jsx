"use client";
import { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import {
  taskTableColumns,
  taskTableActions,
  taskTableData,
} from "../../../config/taskManagement";
import AddTaskModal from "./AddTaskModel";

export default function Task() {
  const [openAddTask, setOpenAddTask] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-semibold">
          Task Management List
        </h2>

        <div className="bg-white rounded-2xl">
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
            <Button className="w-[190px]"
              variant="danger"
              onClick={() => setOpenAddTask(true)}
            >
              + Add New Task
            </Button>
          </div>

          <div className="overflow-x-auto">
            <BasicTable
              columns={taskTableColumns}
              data={taskTableData}
              actions={taskTableActions}
              wrapperClassName="rounded-b-2xl"
              pagination
              total={124}
              pageSize={10}
            />
          </div>
        </div>
      </div>

      {/* ADD TASK MODAL */}
      <AddTaskModal
        open={openAddTask}
        onClose={() => setOpenAddTask(false)}
      />
    </>
  );
}
