import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
export const SideBarData = [
  {
    title: "Overview",
    icon: <PieChartIcon />,
    link: "/overview",
  },
  {
    title: "Orders",
    icon: <ReceiptIcon />,
    link: "/orders",
  },
  {
    title: "Inventory",
    icon: <InventoryIcon />,
    link: "/inventory",
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    link: "/reports",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
