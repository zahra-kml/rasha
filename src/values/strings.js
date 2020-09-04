import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import SettingsCellOutlinedIcon from "@material-ui/icons/SettingsCellOutlined";
import RestoreOutlinedIcon from "@material-ui/icons/RestoreOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import RedeemOutlinedIcon from "@material-ui/icons/RedeemOutlined";
export const MenuArray = [
  {
    id: 1,
    icon: HomeOutlinedIcon,
    EnName: "Home",
    FaName: "خانه",
    url: "/dashboard",
    subMenuItems: [],
    open: false,
    subMenu: false,
  },
  {
    id: 2,
    icon: BusinessOutlinedIcon,
    EnName: "Devices",
    FaName: "دستگاه ها",
    url: "",
    subMenuItems: [
      {
        id: 1,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 2,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 3,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
    ],
    open: false,
    subMenu: true,
  },
  {
    id: 3,
    icon: GroupOutlinedIcon,
    EnName: "Users",
    FaName: "کاربران",
    url: "#",
    subMenuItems: [],
    open: false,
    subMenu: false,
  },
  {
    id: 4,
    icon: SettingsCellOutlinedIcon,
    EnName: "Power Banks",
    FaName: "پاوربانک ها",
    url: "#",
    subMenuItems: [],
    open: false,
    subMenu: false,
  },
  {
    id: 5,
    icon: RestoreOutlinedIcon,
    EnName: "Leases",
    FaName: "اجاره ها",
    url: "",
    subMenuItems: [
      {
        id: 1,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 2,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 3,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
    ],
    open: false,
    subMenu: true,
  },
  {
    id: 6,
    icon: AttachMoneyOutlinedIcon,
    EnName: "Banking transactions",
    FaName: "تراکنش های بانکی",
    url: "#",
    subMenuItems: [],
    open: false,
    subMenu: false,
  },
  {
    id: 7,
    icon: RedeemOutlinedIcon,
    EnName: "Gift codes",
    FaName: "کد های هدیه",
    url: "#",
    subMenuItems: [],
    open: false,
    subMenu: false,
  },
];
