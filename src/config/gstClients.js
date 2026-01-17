import Badge from "@/components/common/Badge";


export const GST_CLIENT_COLUMNS = [
    {
        label: "GSTIN",
        key: "gstin",
    },
    {
        label: "Legal Name",
        key: "legalName",
    },
    {
        label: "State",
        key: "state",
    },
    {
        label: "Last Return Filed",
        key: "lastReturn",
    },
    {
        label: "Status",
        key: "status",
    },
];

export const GST_CLIENT_DATA = [
    {
        id: 1,
        gstin: "29ABCDE1234F1Z5",
        legalName: "Tech Solutions Private Limited",
        state: "Karnataka",
        lastReturn: "March 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 2,
        gstin: "27FGHJK5678K2A4",
        legalName: "Global Exports Limited",
        state: "Maharashtra",
        lastReturn: "March 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 3,
        gstin: "06KLMNO9012P3Q8",
        legalName: "Retail Chain Incorporated",
        state: "Haryana",
        lastReturn: "February 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 4,
        gstin: "07PQRS4567R8T2U",
        legalName: "Import Export Hub",
        state: "Uttar Pradesh",
        lastReturn: "January 2024",
        status: <Badge text="Cancelled" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 5,
        gstin: "19WXYZA9876B4C2",
        legalName: "Services Group Limited",
        state: "West Bengal",
        lastReturn: "March 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 6,
        gstin: "24ABCDE5678D9E1",
        legalName: "Trading Partners Pvt Ltd",
        state: "Gujarat",
        lastReturn: "March 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 7,
        gstin: "36FGHIJ2345K6L7",
        legalName: "Digital Services India",
        state: "Telangana",
        lastReturn: "February 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
    {
        id: 8,
        gstin: "33MNOPQ6789R1S2",
        legalName: "Manufacturing Corp",
        state: "Tamil Nadu",
        lastReturn: "January 2024",
        status: <Badge text="Active" />,
        route: "/gst-filing/gst-filling-management/access-clients/${row.id}",
    },
];
