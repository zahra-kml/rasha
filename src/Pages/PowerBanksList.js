import React from "react";
import MaterialTable from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import AddPowerBankModal from "../Components/Modals/AddPowerBank";

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

export default function PowerBanksList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "کد پاوربانک", field: "PowerBankCode" },
      { title: "حالت پاوربانک", field: "PowerBankMode" },
    ],
    data: [
      {
        PowerBankCode: "ghhd4789098dfh",
        PowerBankMode: "aaaaa",
      },
    ],
  });

  const [openAddPowerBankModal, setOpenAddPowerBankModal] = React.useState(
    false
  );

  const handleOpenAddPowerBankModal = () => {
    setOpenAddPowerBankModal(true);
  };

  const handleCloseAddPowerBankModal = () => {
    setOpenAddPowerBankModal(false);
  };
  const submitAddPowerBankModal = () => {
    setOpenAddPowerBankModal(false);
    //
  };

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        لیست پاوربانک ها
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
              icon: () => <CreateIcon />,
              tooltip: "ویرایش",
              onClick: (event) => {},
            },
          ]}
          editable={{
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
            onClick={handleOpenAddPowerBankModal}
          >
            اضافه کردن پاوربانک
          </Button>
        </div>
        <AddPowerBankModal
          open={openAddPowerBankModal}
          handleClose={handleCloseAddPowerBankModal}
          submit={submitAddPowerBankModal}
        />
      </Paper>
    </>
  );
}
