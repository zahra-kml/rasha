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

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        خلاصه ی وضعیت دستگاه ها
      </Typography>
      <Paper className={classes.paper}>
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
          >
            اضافه کردن ایستگاه
          </Button>
        </div>
      </Paper>
    </>
  );
}