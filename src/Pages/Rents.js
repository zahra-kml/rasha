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
import icon1 from "../Assets/icons8-assignment-return-90.png";
import icon2 from "../Assets/icons8-return-96.png";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import ReturnModal from "../Components/Modals/Return";
import AddStationModal from "../Components/Modals/AddStation";
import ReturnAccordingToTheOperatorModal from "../Components/Modals/ReturnAccordingToTheOperator";

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
  icon: {
    width: "1em",
    height: "1em",
  },
}));

export default function RentsList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "شماره ی کاربر", field: "UserNumber" },
      { title: "کد پاوربانک", field: "PowerBankCode" },
      { title: "محل دریافت", field: "PlaceOfReceipt" },
      { title: "زمان دریافت", field: "ReceiptTime" },
    ],
    data: [
      {
        UserNumber: 123,
        PowerBankCode: 7857,
        PlaceOfReceipt: "کافه فورنو",
        ReceiptTime: "12:56",
      },
    ],
  });
  const [startDay, setStartDay] = React.useState(null);
  const [endDay, setEndDay] = React.useState(null);
  const [openReturnModal, setOpenReturnModal] = React.useState(false);
  const [
    openReturnAccordingToTheOperatorModal,
    setOpenReturnAccordingToTheOperatorModal,
  ] = React.useState(false);
  const handleOpenReturnModal = () => {
    setOpenReturnModal(true);
  };
  const handleOpenReturnAccordingToTheOperatorModal = () => {
    setOpenReturnAccordingToTheOperatorModal(true);
  };

  const handleCloseReturnModal = () => {
    setOpenReturnModal(false);
  };
  const handleCloseReturnAccordingToTheOperatorModal = () => {
    setOpenReturnAccordingToTheOperatorModal(false);
  };
  const submitReturnModal = () => {
    setOpenReturnModal(false);
    //
  };
  const submitReturnAccordingToTheOperatorModal = () => {
    setOpenReturnAccordingToTheOperatorModal(false);
    //
  };
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        گزارش اجاره ها
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
              icon: () => <img src={icon1} className={classes.icon} />,
              tooltip: "بازگشت با توجه به نظر اپراتور",
              onClick: (event) => {
                handleOpenReturnAccordingToTheOperatorModal();
              },
            },
            {
              icon: () => <img src={icon2} className={classes.icon} />,
              tooltip: "بازگشت",
              onClick: (event) => {
                handleOpenReturnModal();
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
        <ReturnModal
          open={openReturnModal}
          handleClose={handleCloseReturnModal}
          submit={submitReturnModal}
        />
        <ReturnAccordingToTheOperatorModal
          open={openReturnAccordingToTheOperatorModal}
          handleClose={handleCloseReturnAccordingToTheOperatorModal}
          submit={submitReturnAccordingToTheOperatorModal}
        />
      </Paper>
    </>
  );
}
