import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    margin: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
  paper: {
    margin: theme.spacing(0),
    padding: theme.spacing(1),
  },
}));

export default function Summary() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "کد دستگاه", field: "DeviceCode" },
      { title: "بارکد دستگاه", field: "DeviceBarcode" },
      { title: "وضعیت دستگاه", field: "DeviceStatus" },
      { title: "موقعیت دستگاه", field: "DevicePosition" },
      { title: "تعداد پورت های دستگاه", field: "NumberOfDevicePorts" },
      { title: "تعداد پورت های خالی", field: "NumberOfEmptyPorts" },
      { title: "آخرین به روز رسانی", field: "latestUpdate" },
    ],
    data: [
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
    ],
  });

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        خلاصه ی وضعیت دستگاه ها
      </Typography>
      <div className={classes.paper}>
        <MaterialTable
          options={{
            headerStyle: {
              position: "sticky",
              top: 0,
              fontSize: 14,
              whiteSpace: "nowrap",
            },
            maxBodyHeight: 500,

            searchFieldStyle: {
              fontSize: 12,
              width: "100%",

              alignSelf: "flex-end",
            },
          }}
          localization={{
            grouping: {
              placeholder: "جهت دسته بندی سرستون را اینجا بکشید",
              groupedBy: "دسته بندی براساس",
            },
            body: {
              addTooltip: "افزودن",
              deleteTooltip: "حذف",
              editTooltip: "ویرایش",
              emptyDataSourceMessage: "گروهی برای نمایش وجود ندارد",
              editRow: {
                deleteText: "از حذف این سطر اطمینان دارید؟",
              },
            },
            toolbar: {
              exportAriaLabel: "خروجی",
              exportTitle: "خروجی",
              exportName: "خروجی فرمت CSV",
              searchTooltip: "جستجو",
              searchPlaceholder: "جستجو",
            },
            pagination: {
              nextTooltip: "صفحه بعد",
              previousTooltip: "صفحه قبل",
              firstTooltip: "صفحه اول",
              lastTooltip: "صفحه آخر",
              labelRowsSelect: "ردیف",
              labelDisplayedRows: "{from}-{to} از {count}",
            },
          }}
          title={
            <Tooltip title="به روز رسانی">
              <IconButton size="small" color="primary" onClick={() => {}}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          }
          columns={state.columns}
          data={state.data}
        />
      </div>
    </>
  );
}
