import {
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FilterIcon from "./icons/FilterIcon";
import { STATUSES } from "../../data";
import { ColorIcon } from "./StatusCell";

const StatusItem = ({ status, setColumnFilters }) => (
  <Flex
    align="center"
    cursor="pointer"
    borderRadius={5}
    fontWeight="bold"
    p={1.5}
    _hover={{ bg: "grey.800" }}
    onClick = {() => {
        
    }}
  >
    <ColorIcon color={status.color} mr={3} />
    {status.name}
  </Flex>
);
const FilterPopOver = ({columnFilters, setColumnFilters}) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button size="sm" leftIcon={<Icon as={FilterIcon} fontSize={18} />}>
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Filter By:
          </Text>
          <Text fontWeight="bold" color="grey.400" mb={1}>
            Status
          </Text>
          <VStack align="flex-start" spacing={1}>
            {STATUSES.map((status) => (
              <StatusItem status={status} key={status.id} setColumnFilters={setColumnFilters} />
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopOver;
