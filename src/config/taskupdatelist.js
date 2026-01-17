import Badge from "@/components/common/Badge";

export const taskUpdateColumns = [
  { label: "S.No", key: "sno" },
  { label: "Client", key: "client" },
  { label: "Task Name", key: "taskName" },
  { label: "Task Type", key: "taskType" },
  { label: "Assignee", key: "assignee" },
  {
    label: "Priority",
    key: "priority",
    render: (value) => (
      <Badge text={value} variant="primary" />
    ),
  },
  { label: "Date", key: "date" },
  {
    label: "Status",
    key: "status",
    render: (value) => (
      <Badge
        text={value}
        variant={value === "Completed" ? "success" : "warning"}
      />
    ),
  },
  {
    label: "Action",
    key: "action",
    render: () => (
      <i className="ri-more-2-fill cursor-pointer text-gray-500" />
    ),
  },
];

export const taskUpdateData = [
  {
    id: 1,
    sno: 1,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 2,
    sno: 2,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 3,
    sno: 3,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 4,
    sno: 4,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 5,
    sno: 5,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 6,
    sno: 6,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 7,
    sno: 7,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 8,
    sno: 8,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 9,
    sno: 9,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
  {
    id: 10,
    sno: 10,
    client: "Heman",
    taskName: "Task-1",
    taskType: "Sub Task",
    assignee: "John Smith",
    priority: "High",
    date: "1-Dec-2025",
    status: "Completed",
  },
];

