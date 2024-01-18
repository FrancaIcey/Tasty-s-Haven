import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en-gb";
import Stack from "@mui/material/Stack";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";

// const locales = ["en", "en-gb", "de"];

export default function AmPMCustomization({ defaultValue, dateValue }) {
  const [locale, setLocale] = React.useState("en");

  const handleDateChange = (date) => {
    dateValue(date);
  };
  // console.log(handleDateChange);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Stack spacing={3} width={"40vw"}>
        <DateTimePicker
          value={dayjs(defaultValue)}
          // label="Uncontrolled picker"

          onChange={handleDateChange}
        />
      </Stack>
    </LocalizationProvider>
  );
};