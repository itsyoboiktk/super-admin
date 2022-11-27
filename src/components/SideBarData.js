import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
export const SideBarData = [
  {
    title: "Overview",
    icon: <PieChartIcon />,
    link: "/",
  },
  {
    title: "Orders",
    icon: <ReceiptIcon />,
    link: "/orders",
  },
  {
    title: "Returned Orders",
    icon: <AssignmentReturnIcon />,
    link: "/returned",
  },
  {
    title: "Inventory",
    icon: <InventoryIcon />,
    link: "/inventory",
  },
  {
    title: "Add Product",
    icon: <AddIcon />,
    link: "/addProduct",
  },
  { title: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
  { title: "Log out", icon: <LogoutIcon />, link: "/home/log out" },
];
