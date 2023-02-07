import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Calendar from "react-calendar";
import { useState } from "react";
import { Box, Icon, Text } from "@chakra-ui/react";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  console.log(date)
  return (
    <Calendar
      onChange={setDate}
      value={date}
      defaultActiveStartDate={date}
      // selectRange={selectRange}
      view={"month"}
      prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
      nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
    />
  );
}

export default MyCalendar;
