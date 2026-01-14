"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";

import {
    permissionColumns,
    permissionData,
} from "../../../config/permission";

export default function RoleDetails() {
    const [data, setData] = useState(permissionData);
    const [allowAll, setAllowAll] = useState(false);

    const toggleAllModules = () => {
        const val = !allowAll;
        setAllowAll(val);

        setData((prev) =>
            prev.map((r) => ({
                ...r,
                create: val,
                edit: val,
                delete: val,
                view: val,
                all: val,
            }))
        );
    };

    const toggleRow = (index, key) => {
        const newData = [...data];
        newData[index][key] = !newData[index][key];

        if (["create", "edit", "delete", "view"].includes(key)) {
            newData[index].all =
                newData[index].create &&
                newData[index].edit &&
                newData[index].delete &&
                newData[index].view;
        }

        setData(newData);
    };

    const columns = permissionColumns.map((col) => {
        if (["create", "edit", "delete", "view", "all"].includes(col.key)) {
            return {
                ...col,
                render: (_, row, rowIndex) => (
                    <input
                        type="checkbox"
                        checked={row[col.key]}
                        onChange={() => toggleRow(rowIndex, col.key)}
                        className="w-4 h-4"
                    />
                ),
            };
        }
        return col;
    });

    return (
        <div>

            <h2 className="text-lg font-semibold mb-5">Permissions</h2>
            <div className="">


                <div className="flex bg-white p-6  border border-gray-200 rounded-t-2xl justify-between text-sm">
                    <div>
                        Role Name:{" "}
                        <span className="text-blue-600 font-medium">Testings</span>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={allowAll}
                            onChange={toggleAllModules}
                        />
                        Allow All Modules
                    </label>
                </div>

                <BasicTable
                    columns={columns}
                    data={data}
                    wrapperClassName="rounded-b-2xl"
                    pagination
                    pageSize={10}
                    total={1234}
                />
            </div>
        </div>
    );
}
