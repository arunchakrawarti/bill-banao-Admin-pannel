"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { ViewAction, DeleteAction, MoreAction } from "@/components/atoms/Icons";
import { userColumns, userData } from "../../../config/user";
import Input from "@/components/common/Input";
import AddnewModal from "./AddnewModal";

const actions = [ViewAction, DeleteAction, MoreAction];

export default function User() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 sm:mt-7">
      <h1 className="font-poppins font-semibold text-[20px] tracking-normal">
        User
      </h1>

      <div className="bg-white rounded-t-2xl">

        <div className="flex flex-col p-4 mt-4 sm:flex-row sm:items-center sm:justify-between rounded-t-2xl gap-3 border border-gray-200">

          <div className="w-full sm:w-72">
            <Input
              icon="ri-search-line text-gray-500"
              placeholder="Search here"
              className="border border-gray-300 h-11 w-full"
            />
          </div>

          <Button
            variant="danger"
            className="w-full sm:w-auto h-11 px-5"
            onClick={() => setOpen(true)}
          >
            + Add New Employee
          </Button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <BasicTable
            columns={userColumns}
            data={userData}
            actions={actions}
            wrapperClassName="rounded-b-2xl"
            pagination
            pageSize={10}
            total={userData.length}
          />
        </div>
      </div>
      <AddnewModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
