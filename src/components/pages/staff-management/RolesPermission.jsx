"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import AddRoleModal from "./AbbRoleModal";
import EditRoleModal from "./EditRoleModal";

import {
  rolesPermissionsColumns,
  rolesPermissionsData,
} from "../../../config/rolesPermission";


const ViewAction = ({ row }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(row.route)}
      className="text-blue-600 hover:text-blue-800"
      title="View"
    >
      <i className="ri-eye-line text-lg" />
    </button>
  );
};

const EditAction = ({ row, onEdit }) => (
  <button
    onClick={() => onEdit(row)}
    className="text-green-600 hover:text-green-700"
    title="Edit"
  >
    <i className="ri-edit-2-line text-lg" />
  </button>
);

export default function RolesPermissions() {
  const [openModal, setOpenModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const actions = [
    ViewAction,
    (props) => (
      <EditAction
        {...props}
        onEdit={(row) => {
          setSelectedRole(row);
          setEditOpen(true);
        }}
      />
    ),
  ];

  return (
    <div className="mt-7">
      <h1 className="text-lg font-semibold">Roles & Permissions</h1>

      <div className="bg-white mt-5 rounded-xl border border-gray-200">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="w-full sm:w-64">
              <Input
                icon="ri-search-line text-gray-400"
                placeholder="Search here"
                className="h-10 border border-gray-300"
              />
            </div>

            <Button
              variant="danger"
              className="h-10 px-4 w-full sm:w-auto"
              onClick={() => setOpenModal(true)}
            >
              + Add Roles
            </Button>
          </div>
        </div>

        <BasicTable
          columns={rolesPermissionsColumns}
          data={rolesPermissionsData}
          actions={actions}
          pagination
          pageSize={10}
          total={rolesPermissionsData.length}
        />
      </div>

      {/* Add */}
      <AddRoleModal open={openModal} onClose={() => setOpenModal(false)} />

      {/* Edit */}
      <EditRoleModal
        open={editOpen}
        defaultValue={selectedRole?.name}
        onClose={() => setEditOpen(false)}
      />
    </div>
  );
}
