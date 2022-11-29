import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
export const SideBarData = [
  {
    title: "Analytics",
    icon: <PieChartIcon />,
    link: "/",
  },
  {
    title: "Stores",
    icon: <InventoryIcon />,
    link: "/stores",
  },
  {
    title: "Users",
    icon: <ReceiptIcon />,
    link: "/users",
  },
  {
    title: "Reports",
    icon: <AssignmentReturnIcon />,
    link: "/report",
  },
  { title: "Log out", icon: <LogoutIcon />, link: "/home/log out" },
];
