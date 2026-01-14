"use client";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import { ViewAction } from "@/components/atoms/Icons";

export default function RecentActivityCard({
  title,
  progress,
  legend,
  columns,
  data,
}) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white p-5 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="font-semibold text-base">{title}</h3>
        <Button variant="outline">View All</Button>
      </div>

      {/* Progress Bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-gray-200">
        {progress.map((p, i) => (
          <div
            key={i}
            className={p.color}
            style={{ width: p.width }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-5 text-sm text-gray-600">
        {legend.map((l, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${l.color}`} />
            <span>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <BasicTable
        columns={columns}
        data={data}
        actions={[ViewAction]}
        pageSize={5}
      />
    </div>
  );
}
