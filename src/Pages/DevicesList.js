import React from "react";
import MaterialTable from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DomainIcon from "@material-ui/icons/Domain";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddStationModal from "../Components/Modals/AddStation";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import ShowDeviceModal from "../Components/Modals/ShowDevice";

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
    margin: theme.spacing(2, 1),
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  datePickersContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  datePicker: {
    margin: theme.spacing(1, 2),
  },
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.between("sm", "md")]: {
      bottom: 0,
      right: 10,
      position: "absolute",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function DevicesList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "کد دستگاه", field: "DeviceCode" },
      { title: "بارکد دستگاه", field: "DeviceBarcode" },
      { title: "موقعیت دستگاه", field: "DevicePosition" },
      { title: "تعداد پورت های خالی", field: "NumberOfEmptyPorts" },
    ],
    data: [
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfEmptyPorts: 5,
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران لئون",
        NumberOfEmptyPorts: 3,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران لیدو",
        NumberOfEmptyPorts: 2,
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DevicePosition: "چلو کبابی برادران",
        NumberOfEmptyPorts: 7,
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
        DevicePosition: "رستوران لئون",
        NumberOfEmptyPorts: 3,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DevicePosition: "رستوران ریناس",
        NumberOfEmptyPorts: 0,
      },
    ],
  });
  const [startDay, setStartDay] = React.useState(null);
  const [endDay, setEndDay] = React.useState(null);
  const [openAddStationModal, setOpenAddStationModal] = React.useState(false);
  const [openShowDeviceModal, setOpenShowDeviceModal] = React.useState(false);
  const handleOpenAddStationModal = () => {
    setOpenAddStationModal(true);
  };
  const handleOpenShowDeviceModal = () => {
    setOpenShowDeviceModal(true);
  };

  const handleCloseShowDeviceModal = () => {
    setOpenShowDeviceModal(false);
  };
  const handleCloseAddStationModal = () => {
    setOpenAddStationModal(false);
  };
  const submitAddStationModal = () => {
    setOpenAddStationModal(false);
    //
  };
  const submitShowDeviceModal = () => {
    setOpenShowDeviceModal(false);
    //
  };

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        گزارش دستگاه ها
      </Typography>

      <Paper className={classes.paper}>
        <div className={classes.datePickersContainer}>
          <Typography variant="body1">از تاریخ</Typography>
          <div className={classes.datePicker} style={{ zIndex: 31 }}>
            <DatePicker
              value={startDay}
              onChange={setStartDay}
              inputPlaceholder="یک روز را انتخاب کنید"
              shouldHighlightWeekends
              locale="fa"
              colorPrimary="#23a267"
            />
          </div>
          <Typography variant="body1">تا تاریخ</Typography>
          <div className={classes.datePicker} style={{ zIndex: 30 }}>
            <DatePicker
              value={endDay}
              onChange={setEndDay}
              inputPlaceholder="یک روز را انتخاب کنید"
              shouldHighlightWeekends
              locale="fa"
              colorPrimary="#23a267"
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className={classes.datePicker}
          >
            اعمال فیلتر
          </Button>
        </div>
        <Divider />
        <MaterialTable
          components={{
            Container: (props) => (
              <div style={{ background: "inherit" }}>{props.children}</div>
            ),
          }}
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
            header: {
              actions: "گزینه ها",
            },
          }}
          title={
            <Tooltip title="به روز رسانی">
              <IconButton size="small" color="primary" onClick={() => {}}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          }
          actions={[
            {
              icon: () => <DomainIcon />,
              tooltip: "نمایش دستگاه",
              onClick: (event) => {
                handleOpenShowDeviceModal();
              },
            },
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
          columns={state.columns}
          data={state.data}
        />
        <Divider />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleOpenAddStationModal}
          >
            اضافه کردن ایستگاه
          </Button>
        </div>
        <AddStationModal
          open={openAddStationModal}
          handleClose={handleCloseAddStationModal}
          submit={submitAddStationModal}
        />
        <ShowDeviceModal
          open={openShowDeviceModal}
          handleClose={handleCloseShowDeviceModal}
          submit={submitShowDeviceModal}
        />
      </Paper>
    </>
  );
}
