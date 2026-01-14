import {
  ViewAction,
  EditAction,
  DeleteAction,
} from "@/components/atoms/Icons";

export const departmentColumns = [
  { label: "S. No", key: "id" },
  { label: "Department Name", key: "name" },
  { label: "Status", key: "status" },
];

export const departmentData = [
  { id: 1, name: "Human Resources", status: true },
  { id: 2, name: "Finance", status: true },
  { id: 3, name: "Sales", status: true },
  { id: 4, name: "Marketing", status: false },
  { id: 5, name: "IT Support", status: true },
  { id: 6, name: "Operations", status: true },
  { id: 7, name: "Administration", status: false },
  { id: 8, name: "Customer Service", status: true },
  { id: 9, name: "Logistics", status: true },
  { id: 10, name: "Product Management", status: true },
];

export const departmentActions = [
  ViewAction,
  EditAction,
  DeleteAction,
];
