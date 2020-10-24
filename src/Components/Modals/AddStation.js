import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddDeviceModal from "./AddDevice";
import AddTariffModal from "./AddTariff";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "60vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  title: {
    marginTop: theme.spacing(2),
    width: "95%",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "1%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "xl")]: {
      width: "47%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    margin: theme.spacing(0.5),
  },
}));

export default function AddStationModal(props) {
  const classes = useStyles();
  const [openAddDeviceModal, setOpenAddDeviceModal] = React.useState(false);
  const [openAddTariffModal, setOpenAddTariffModal] = React.useState(false);

  const handleOpenAddDeviceModal = () => {
    setOpenAddDeviceModal(true);
  };

  const handleOpenAddTariffModal = () => {
    setOpenAddTariffModal(true);
  };

  const handleCloseAddDeviceModal = () => {
    setOpenAddDeviceModal(false);
  };
  const handleCloseAddTariffModal = () => {
    setOpenAddTariffModal(false);
  };
  const submitAddDeviceModal = () => {
    setOpenAddDeviceModal(false);
    //
  };
  const submitAddTariffModal = () => {
    setOpenAddTariffModal(false);
    //
  };
  const [DevicePosition, setDevicePosition] = React.useState("");
  const [Device, setDevice] = React.useState("");
  const [DeviceTariff, setDeviceTariff] = React.useState("");
  const [DeviceOwner, setDeviceOwner] = React.useState("");
  const [DeviceManager, setDeviceManager] = React.useState("");
  const [DeviceStatus, setDeviceStatus] = React.useState("");
  const DeviceHandleChange = (event) => {
    setDevice(event.target.value);
  };
  const DevicePositionHandleChange = (event) => {
    setDevicePosition(event.target.value);
  };
  const DeviceTariffHandleChange = (event) => {
    setDeviceTariff(event.target.value);
  };
  const DeviceOwnerHandleChange = (event) => {
    setDeviceOwner(event.target.value);
  };
  const DeviceManagerHandleChange = (event) => {
    setDeviceManager(event.target.value);
  };
  const DeviceStatusHandleChange = (event) => {
    setDeviceStatus(event.target.value);
  };

  return (
    <Modal
      disableBackdropClick
      disableEscapeKeyDown
      open={props.open}
      onClose={props.handleClose}
    >
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          اضافه کردن ایستگاه
        </Typography>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>موقعیت ایستگاه</InputLabel>
            <Select
              value={DevicePosition}
              onChange={DevicePositionHandleChange}
              label="موقعیت ایستگاه"
            >
              <MenuItem value={10}>آدرس 1</MenuItem>
              <MenuItem value={20}>آدرس 2</MenuItem>
              <MenuItem value={30}>آدرس 3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن آدرس جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>دستگاه</InputLabel>
            <Select value={Device} onChange={DeviceHandleChange} label="دستگاه">
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن دستگاه جدید" aria-label="add">
            <IconButton aria-label="add" onClick={handleOpenAddDeviceModal}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>

        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>تعرفه ی ایستگاه</InputLabel>
            <Select
              value={DeviceTariff}
              onChange={DeviceTariffHandleChange}
              label="تعرفه ی ایستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن تعرفه ی جدید" aria-label="add">
            <IconButton aria-label="add" onClick={handleOpenAddTariffModal}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>مالک ایستگاه</InputLabel>
            <Select
              value={DeviceOwner}
              onChange={DeviceOwnerHandleChange}
              label="مالک ایستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن مالک جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>متصدی ایستگاه</InputLabel>
            <Select
              value={DeviceManager}
              onChange={DeviceManagerHandleChange}
              label="متصدی ایستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن متصدی جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>وضعیت ایستگاه</InputLabel>
            <Select
              value={DeviceStatus}
              onChange={DeviceStatusHandleChange}
              label="وضعیت ایستگاه"
            >
              <MenuItem value={10}>آماده</MenuItem>
              <MenuItem value={20}>خارج از سرویس</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن وضعیت جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>

        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="default"
            variant="outlined"
            className={classes.button}
            onClick={props.handleClose}
          >
            انصراف
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={props.submit}
          >
            ثبت
          </Button>
        </div>
        <AddDeviceModal
          open={openAddDeviceModal}
          handleClose={handleCloseAddDeviceModal}
          submit={submitAddDeviceModal}
        />
        <AddTariffModal
          open={openAddTariffModal}
          handleClose={handleCloseAddTariffModal}
          submit={submitAddTariffModal}
        />
      </Paper>
    </Modal>
  );
}
