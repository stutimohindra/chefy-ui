import React from "react";
import { Avatar, Flex, Separator, Text } from "@radix-ui/themes";
import { ChefReviewProps } from "./types";
import Rating from "./Rating";

const ChefReview = ({
  photoUrl,
  name,
  reviews,
  gender,
  experience,
}: ChefReviewProps) => {
  return (
    <div>
      <Separator
        orientation="horizontal"
        style={{ width: "1040px", margin: "24px", alignItems: "center" }}
      />
      <Flex direction={"row"} gap={"4"} wrap={"wrap"}>
        {reviews.map((review, i) => {
          return (
            <Flex
              key={i}
              gap="4"
              align="center"
              style={{ border: "black", borderStyle: "solid", padding: "12px" }}
            >
              <Avatar
                size="4"
                variant="soft"
                src={review.customerPhotoUrl}
                fallback={review.customerName.charAt(0)}
                radius="small"
                highContrast
              />
              <Flex direction={"column"} gap="2">
                <Text weight={"bold"}>{review.customerName}</Text>{" "}
                <Rating rating={review.rating} />
                <Text>{review.comment}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default ChefReview;
