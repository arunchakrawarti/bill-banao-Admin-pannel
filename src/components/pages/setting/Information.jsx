"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Information = () => {
    return (
        <div className="w-full space-y-5 bg-white p-4 rounded-2xl">

            <h1 className="font-inter font-bold text-[24px] text-[#1D2939]">
                Update Password
            </h1>


            <Input
                label="Current Password"
                type="password"
                className="border border-gray-300"
                placeholder="Enter current password"
                icon="ri-lock-line"
            />


            <Input
                label="New Password"
                type="password"
                className="border border-gray-300"
                placeholder="Enter new password"
                icon="ri-lock-password-line"
            />


            <Input
                label="Confirm New Password"
                type="password"
                className="border border-gray-300"
                placeholder="Confirm new password"
                icon="ri-lock-password-line"
            />


            <Button variant="danger">
                Update Password
            </Button>
        </div>
    );
};

export default Information;
