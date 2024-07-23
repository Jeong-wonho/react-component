import { Box, Center, Icon } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./icons/CalnedarIcon";

const DateCustomInput = forwardRef(({value, onClick, clearDate}, ref) => (
    <Center onClick = {onClick} cursor="pointer" mt={2} ref={ref}>
        {
            value?<>
                {value}
                <Box
                    pos="absolute"
                    right={3}
                    fontSize="md"
                    color="red.300"
                    onClick={(e) => {
                        e.stopPropagation();
                        clearDate();
                    }}>
                        &times;
                    </Box>
            </>:<Icon as={CalendarIcon} fontSize='xl'/>
        }
    </Center>
))

const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <div>
      <DatePicker
        wrapperClassName="date-wrapper"
        dateFormat="MMM d"
        selected={date}
        onChange={(date) => updateData(row.index, column.id, date)}
        customInput={
            <DateCustomInput clearDate={
                () => updateData(
                    row.index, column.id, null
                )}/>
        }
      />
    </div>
  );
};

export default DateCell;
