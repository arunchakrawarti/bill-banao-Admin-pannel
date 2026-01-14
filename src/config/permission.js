export const permissionColumns = [
  { label: "S. No", key: "id" },
  { label: "Modules", key: "module" },
  { label: "Sub Modules", key: "submodule" },
  { label: "Create", key: "create" },
  { label: "Edit", key: "edit" },
  { label: "Delete", key: "delete" },
  { label: "View", key: "view" },
  { label: "Allow All", key: "all" },
];

export const permissionData = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  module: "Dashboard",
  submodule: "Dashboard",
  create: false,
  edit: false,
  delete: false,
  view: false,
  all: false,
}));
