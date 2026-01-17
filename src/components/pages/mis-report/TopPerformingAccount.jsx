"use client";
import Profile from "@/components/common/Profile";
import { topAccountants } from "../../../config/topaccount";

export default function TopPerformingAccount() {
  return (
    <div className="rounded-xl bg-white mt-7 p-4 shadow-sm">
      <p className="font-inter font-medium text-[1.25rem] tracking-[-0.028rem] mb-4">
        Top Performing Accountants
      </p>

      <div className="space-y-3">
        {topAccountants.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
          >
            <Profile
              icon={item.rank}
              size="sm"
              name={item.name}
              desc={item.clients}
              rounded="full"
              className="bg-gradient-to-br from-indigo-500 to-purple-500"
            />

            <div className="flex gap-3">
                <div className="text-right">
              <p className="text-sm font-medium text-gray-800">
                {item.revenue}
              </p>
              <p className="text-[10px] text-gray-500">
                Total Revenue
              </p>
            </div>

            <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
               {item.growth}
            </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
