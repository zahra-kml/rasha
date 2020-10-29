import React from "react";
import MaterialTable from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Divider from "@material-ui/core/Divider";
import DoneRefundModal from "../Components/Modals/DoneRefund";

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

export default function RefundsList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "شماره ی شبا", field: "shabaNumber" },
      { title: "تاریخ درخواست", field: "dateOfRequest" },
      { title: "شماره ی تلفن", field: "phoneNumber" },
    ],
    data: [
      {
        shabaNumber: 12455642567,
        dateOfRequest: "1399/5/9",
        phoneNumber: 9124172775,
      },
    ],
  });
  const [startDay, setStartDay] = React.useState(null);
  const [endDay, setEndDay] = React.useState(null);
  const [openDoneRefundModal, setOpenDoneRefundModal] = React.useState(false);
  const handleOpenDoneRefundModal = () => {
    setOpenDoneRefundModal(true);
  };

  const handleCloseDoneRefundModal = () => {
    setOpenDoneRefundModal(false);
  };
  const submitDoneRefundModal = () => {
    setOpenDoneRefundModal(false);
    //
  };
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        لیست استرداد ها
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
          actions={[
            {
              icon: () => <DoneOutlineIcon />,
              tooltip: "انجام استرداد",
              onClick: (event) => {
                handleOpenDoneRefundModal();
              },
            },
          ]}
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
        <DoneRefundModal
          open={openDoneRefundModal}
          handleClose={handleCloseDoneRefundModal}
          submit={submitDoneRefundModal}
        />
      </Paper>
    </>
  );
}
