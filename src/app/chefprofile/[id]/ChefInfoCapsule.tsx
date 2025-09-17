import React from "react";
import { capsule, capsuleSeparator } from "./styles.css";
import { Flex, Text, Separator } from "@radix-ui/themes";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { ChefInfoCapsuleProps } from "./types";
import Rating from "./Rating";

const ChefInfoCapsule = ({ rating, reviews }: ChefInfoCapsuleProps) => {
  return (
    <div className={capsule}>
      Guest Favorite
      <Separator
        orientation="vertical"
        my="3"
        size="4"
        className={capsuleSeparator}
      />
      <Flex direction={"column"} align={"center"}>
        <Text>{rating}</Text>
        <Rating rating={rating}></Rating>
      </Flex>
      <Separator
        orientation="vertical"
        my="3"
        size="4"
        color="green"
        className={capsuleSeparator}
      />
      <Flex direction={"column"}>
        <Text align={"center"}>{reviews.length}</Text>
        <Text>Reviews</Text>
      </Flex>
    </div>
  );
};

export default ChefInfoCapsule;
