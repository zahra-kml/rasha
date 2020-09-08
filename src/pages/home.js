import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

export default function Summary() {
  const [state, setState] = React.useState({
    columns: [
      { title: "کد دستگاه", field: "کد دستگاه" },
      { title: "بارکد دستگاه", field: "بارکد دستگاه" },
      { title: "وضعیت دستگاه", field: "وضعیت دستگاه" },
      { title: "موقعیت دستگاه", field: "موقعیت دستگاه" },
      { title: "تعداد پورت های دستگاه", field: "تعداد پورت های دستگاه" },
      { title: "تعداد پورت های خالی", field: "تعداد پورت های خالی" },
      { title: "آخرین به روز رسانی", field: "آخرین به روز رسانی" },
    ],
    data: [
      { name: "زهرا", surname: "احمدی", birthYear: 1987, birthCity: 63 },
      {
        name: "فاطمه",
        surname: "کرمی",
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: "علی",
        surname: "اکبری",
        birthYear: 2017,
        birthCity: 34,
      },
      { name: "زهرا", surname: "احمدی", birthYear: 1987, birthCity: 63 },
      {
        name: "فاطمه",
        surname: "کرمی",
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: "علی",
        surname: "اکبری",
        birthYear: 2017,
        birthCity: 34,
      },
      { name: "زهرا", surname: "احمدی", birthYear: 1987, birthCity: 63 },
      {
        name: "فاطمه",
        surname: "کرمی",
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: "علی",
        surname: "اکبری",
        birthYear: 2017,
        birthCity: 34,
      },
      { name: "زهرا", surname: "احمدی", birthYear: 1987, birthCity: 63 },
      {
        name: "فاطمه",
        surname: "کرمی",
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: "علی",
        surname: "اکبری",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <>
      <Typography style={{ color: "white", margin: ".5%" }}>
        خلاصه ی وضعیت دستگاه ها
      </Typography>
      <MaterialTable
        options={{
          headerStyle: {
            position: "sticky",
            top: 0,
            fontSize: 14,
            whiteSpace: "nowrap",
          },
          maxBodyHeight: 500,
          // selection: true,
          searchFieldStyle: {
            fontSize: 12,
            width: "100%",
            // backgroundColor: "red",
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
          <div>
            <IconButton size="small" color="primary" onClick={() => {}}>
              <RefreshIcon />
            </IconButton>
          </div>
        }
        columns={state.columns}
        data={state.data}
      />
    </>
  );
}
