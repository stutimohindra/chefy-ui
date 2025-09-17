"use client";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const DatePicker = () => {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined);

  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={setSelected}
      //   footer={
      //     selected && selected.length > 0
      //       ? `Selected: ${selected
      //           .map((date) => date.toLocaleDateString())
      //           .join(", ")}`
      //       : "Pick a day."
      //   }
    />
  );
};

export default DatePicker;
