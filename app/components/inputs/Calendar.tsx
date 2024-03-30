"use client";

import { DateRange, Range } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface CalendarProps {
  value: Range;
  onChange: (value: Range) => void;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disabledDates,
}: any) => {
  console.log(disabledDates);
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      onChange={onChange}
      date={new Date()}
      direction="vertical"
      showDateDisplay={false}
      disabledDates={disabledDates}
      minDate={new Date()}
    />
  );
};

export default Calendar;
