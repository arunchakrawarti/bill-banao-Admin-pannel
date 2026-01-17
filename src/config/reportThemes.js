import {
  FileText
} from "lucide-react";

export const REPORT_THEMES = {
  monthly: {
    label: "Monthly",
    icon: FileText,
    badgeClass: "bg-green-100 text-green-700",
    iconBg: "bg-green-50",
    iconText: "text-green-600",
  },

  quarterly: {
    label: "Quarterly",
    icon: FileText,
    badgeClass: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
  },

  annually: {
    label: "Annually",
    icon: FileText,
    badgeClass: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
  },

  autodraft: {
    label: "Auto Drafted",
    icon: FileText,
    badgeClass: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
  },

  inactive: {
    label: "Inactive",
    icon: FileText,
    badgeClass: "bg-gray-100 text-gray-600",
    iconBg: "bg-gray-50",
    iconText: "text-gray-500",
  },
};
