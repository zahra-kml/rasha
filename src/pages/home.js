import React from "react";
import MaterialTable from "material-table";
import { placeholder } from "@babel/types";

export default function Summary() {
  const [state, setState] = React.useState({
    columns: [
      { title: "اسم", field: "name", editable: "never" },
      { title: "فامیل", field: "surname" },
      { title: "سال تولد", field: "birthYear", type: "numeric" },
      {
        title: "محل تولد",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
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
    <MaterialTable
      options={{
        headerStyle: { position: "sticky", top: 0 },
        maxBodyHeight: 500,
        // selection: true,
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
      title="خلاصه ی وضعیت دستگاه ها"
      columns={state.columns}
      data={state.data}
    />
  );
}
