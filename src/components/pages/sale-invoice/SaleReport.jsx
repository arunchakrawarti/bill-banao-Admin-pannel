"use client";
import React from "react";
import { saleReportStats } from "../../../config/salereport";
import Heading from "@/components/atoms/Heading";
import StatsCard from "@/components/molecules/StatsCard";
import BasicTable from "@/components/common/BasicTable";
import {
  clientInvoiceColumns,
  clientInvoiceData,
  clientInvoiceActions,
} from "../../../config/clientinvoice";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const SaleReport = () => {
  return (
    <div className="">
      {/* Heading */}
      <Heading
        title="Invoice List"
        paragraph="View and manage all your invoices"
      />

      {/* Stats Cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {saleReportStats.map((item, i) => (
          <StatsCard
            key={i}
            title={item.title}
            value={item.value}
            change={item.change}
            invoices={item.invoices}
            variant="detailed"
          />
        ))}
      </div>

      {/* Search & Actions */}
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-4 rounded-t-2xl border border-gray-200">
          {/* Search */}
          <div className="flex-1 max-w-full sm:max-w-sm">
            <Input
              type="text"
              icon="ri-search-line"
              placeholder="Search invoices..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-indigo-500 h-11 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            <Button variant="outline">
              <i className="ri-calendar-line" />
              Date Range
            </Button>

            <Button variant="tertiary">
              <i className="ri-download-2-line" />
              Export
            </Button>

            <Link href="/sale-invoice/sale-report/add-invoice">
              <Button variant="danger">
                <i className="ri-add-line" />
                New Invoice
              </Button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <BasicTable
            columns={clientInvoiceColumns}
            data={clientInvoiceData}
            actions={clientInvoiceActions}
            wrapperClassName="min-w-[600px]" // ensures table scrolls on mobile
            pagination
            pageSize={5}
            total={20}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleReport;
