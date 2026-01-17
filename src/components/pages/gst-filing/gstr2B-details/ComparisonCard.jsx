"use client";
import Button from "@/components/common/Button";
import InfoCard from "@/components/molecules/InfoCard";

const GSTR2A2BComparison = () => {
  return (
    <div className="mt-6  space-y-6">

      {/* Comparison Card */}
      <div className="border border-gray-200 rounded-xl bg-white p-4 overflow-x-auto">
        <h3 className="text-sm font-semibold text-[#1E1E1E] mb-4">
          Comparison: GSTR-2A vs GSTR-2B
        </h3>

        {/* InfoCard scrollable horizontally on small screens */}
        <div className="min-w-[500px]">
          <InfoCard
            type="bar"
            layout="separate"
            items={[
              {
                label: "GSTR-2A (Dynamic)",
                value: (
                  <div>
                    <p>₹2,28,850</p>
                    <p className="text-[11px] font-normal text-gray-400 mt-1 uppercase tracking-tight">
                      As on filing date
                    </p>
                  </div>
                )
              },
              {
                label: "GSTR-2B (Static)",
                value: (
                  <div>
                    <p>₹2,50,200</p>
                    <p className="text-[11px] font-normal text-gray-400 mt-1 uppercase tracking-tight">
                      Final for the period
                    </p>
                  </div>
                )
              },
              {
                label: "Difference",
                value: (
                  <div>
                    <p className="text-green-600">+₹21,350</p>
                    <p className="text-[11px] font-normal text-green-600 mt-1 uppercase tracking-tight">
                      Additional ITC in 2B
                    </p>
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button variant="danger" className="w-full sm:w-auto">Download GSTR-2B</Button>
        <Button variant="outline" className="w-full sm:w-auto">View Detailed Report</Button>
        <Button variant="secondary" className="w-full sm:w-auto">Save Offline</Button>
        <Button variant="outline" className="w-full sm:w-auto">Refresh from Portal</Button>
      </div>
    </div>
  );
};

export default GSTR2A2BComparison;
