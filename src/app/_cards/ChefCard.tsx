import React from "react";
import { Box, Text, Card, Avatar, Flex } from "@radix-ui/themes";
import { ChefCardStyles } from "./styles.css";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ChefCardProps } from "./types";

function ChefCard({
  cuisine,
  price,
  rating,
  name,
  address,
  shouldShowCloseButton,
  onClick,
}: ChefCardProps) {
  return (
    <Box className={ChefCardStyles}>
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Flex align="end" gap="2" justify={"between"}>
              <Text as="div" size="2" weight="bold">
                {name}
              </Text>{" "}
              {shouldShowCloseButton && (
                <Cross1Icon style={{ cursor: "pointer" }} onClick={onClick} />
              )}
            </Flex>
            <Text as="div" size="2" color="gray">
              {cuisine}
            </Text>
            <Text as="div" size="2" color="gray">
              Based in {address}
            </Text>
            <Text as="div" size="2" color="gray">
              Price: {price}/hour
            </Text>
            <Text as="div" size="2" color="gray">
              Reviews {rating} stars
            </Text>
          </Box>{" "}
        </Flex>
      </Card>
    </Box>
  );
}

export default ChefCard;
