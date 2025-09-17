import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import React from "react";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <Flex direction={"row"}>
      {[...Array(Math.floor(rating!))].map((_, index) => (
        <StarFilledIcon key={index} />
      ))}
      {[...Array(5 - Math.floor(rating!))].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </Flex>
  );
};

export default Rating;
