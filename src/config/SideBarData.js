export const SideBarData = [
  {
    label: "Dashboard",
    heroIcon: "ri-dashboard-line",
    route: "/",
  },
   {
    label: "Staff Management",
    heroIcon: "ri-group-line",
    route: "/staff-management",
    hasChildren: true,
    subMenu: [
      {
        label: "User",
        route: "/staff-management/user",
      },
      {
        label: "Role & Permission",
        route: "/staff-management/role-permission",
      },
       {
        label: "Add Employee",
        route: "/staff-management/add-employee",
      },
       {
        label: "Departments",
        route: "/staff-management/department",
      },
    ],
  },
  {
    label: "Client Management",
    heroIcon: "ri-group-line",
    route: "/client-management",
    hasChildren: true,
    subMenu: [
      {
        label: "Add Clients",
        route: "/client-management/add-client",
      },
      {
        label: "Client Details",
        route: "/client-management/clients-details",
      },
    ],
  },
   {
    label: "Task Management",
    heroIcon: "ri-group-line",
    route: "/task-management",
    hasChildren: true,
    subMenu: [
      {
        label: "Task",
        route: "/task-management/task",
      },
      {
        label: "Task Update",
        route: "/task-management/task-update",
      },
    ],
  },
   {
    label: "Sale Invoice",
    heroIcon: "ri-group-line",
    route: "/sale-invoice",
    hasChildren: true,
    subMenu: [
      {
        label: "Sale report",
        route: "/sale-invoice/sale-report",
      },
      {
        label: "Sale",
        route: "/sale-invoice/sale",
      },
       {
        label: "E-Invoice",
        route: "/sale-invoice/e-invoice",
      },
       {
        label: "Sale return",
        route: "/sale-invoice/sale-return",
      },
       {
        label: "Eway Bill",
        route: "/sale-invoice/eway-bill",
      },
       {
        label: "Invoice Templates",
        route: "/sale-invoice/invoice-templates",
      },
    ],
  },
  {
    label: "Purchase",
    heroIcon: "ri-wallet-3-line",
    route: "/Purchase",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
      {
        label: "Purchase Return",
        route: "/purchase/purchase-return",
      },
      {
        label: "Purchase Order",
        route: "/purchase/purchase-report",
      },
      {
        label: "Add Purchase",
        route: "/purchase/add-purchase",
      },
    ]
  },
  {
    label: "Settings",
    heroIcon: "ri-live-line",
    route: "/settings",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
    ]
  },
   {
    label: "Activity Logs",
    heroIcon: "ri-live-line",
    route: "/activity-logs",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
    ]
  },
   {
    label: "MIS Report",
    heroIcon: "ri-live-line",
    route: "/mis-report",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
    ]
  },
   {
    label: "GST Filing",
    heroIcon: "ri-live-line",
    route: "/gst-filing",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
    ]
  },
   {
    label: "Data Retrieval",
    heroIcon: "ri-live-line",
    route: "/settings",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
    ]
  },

];
