import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
export const SideBarData = [
  {
    title: "Overview",
    icon: <PieChartIcon />,
    link: "/home/overview",
  },
  {
    title: "Orders",
    icon: <ReceiptIcon />,
    link: "home/orders",
  },
  {
    title: "Inventory",
    icon: <InventoryIcon />,
    link: "/home/inventory",
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    link: "/home/reports",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/home/settings",
  },
  {
    title: "Add Product",
    icon: <AddIcon />,
    link: "/home/addProduct",
  },
];
