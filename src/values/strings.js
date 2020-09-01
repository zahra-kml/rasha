import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
export const menu = [
  {
    id: 1,
    icon: HomeOutlinedIcon,
    EnName: "Home",
    FaName: "خانه",
    url: "/dashboard",
    subMenu: [],
    open: false,
  },
  {
    id: 2,
    icon: BusinessOutlinedIcon,
    EnName: "Devices",
    FaName: "دستگاه ها",
    url: "",
    subMenu: [
      {
        id: 1,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 1,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
      {
        id: 1,
        EnName: "item",
        FaName: "گزینه",
        url: "#",
      },
    ],
    open: false,
  },
  {
    id: 3,
    icon: GroupOutlinedIcon,
    EnName: "Users",
    FaName: "کاربران",
    url: "#",
    subMenu: [],
    open: false,
  },
];
