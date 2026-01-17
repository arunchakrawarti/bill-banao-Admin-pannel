"use client";

import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";

import {
  taskUpdateColumns,
  taskUpdateData,
} from "../../../config/taskupdatelist";

export default function TaskUpdateTable() {
  return (
    <div className=" ">
      <div className="p-4 rounded-t-2xl bg-white">
        <Input
        placeholder="Search here"
        icon="ri-search-line"
        className="
          w-full sm:w-[260px] h-11
          border border-gray-300
          rounded-md
          px-3 py-2
          text-sm
        "
      />
      </div>
      <div className="bg-white rounded-2xl overflow-x-auto">
        <BasicTable
          columns={taskUpdateColumns}
          data={taskUpdateData}
          wrapperClassName="rounded-t-none rounded-b-2xl"
          pagination
          total={1234}
          pageSize={10}
        />
      </div>
    </div>
  );
}
