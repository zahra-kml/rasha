import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HistoryIcon from "@material-ui/icons/History";

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

export default function UsersList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "اسم", field: "FirstName" },
      { title: "فامیل", field: "LastName" },
      { title: "شماره ی موبایل", field: "phoneNumber" },
    ],
    data: [
      {
        FirstName: "زهرا",
        LastName: "کمالی",
        phoneNumber: "09124172775",
      },
      {
        FirstName: "احمد",
        LastName: "محمدی",
        phoneNumber: "09124172995",
      },
      {
        FirstName: "فائزه",
        LastName: "زمانی",
        phoneNumber: "09124145775",
      },
      {
        FirstName: "محسن",
        LastName: "اکبری",
        phoneNumber: "09187672775",
      },
      {
        FirstName: "علی",
        LastName: "کمالی",
        phoneNumber: "09124999775",
      },
      {
        FirstName: "زهرا",
        LastName: "کمالی",
        phoneNumber: "09124172775",
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
              icon: () => <AttachMoneyIcon />,
              tooltip: "تراکنش های بانکی",
              onClick: (event) => {},
            },
            {
              icon: () => <CardGiftcardIcon />,
              tooltip: "کد های هدیه",
              onClick: (event) => {},
            },
            {
              icon: () => <HistoryIcon />,
              tooltip: "اجاره ها",
              onClick: (event) => {},
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
          }}
          columns={state.columns}
          data={state.data}
        />
      </div>
    </>
  );
}
