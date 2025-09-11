"use client";
import { BackpackIcon, PersonIcon } from "@radix-ui/react-icons";
import { Strong, Text, Flex, Button } from "@radix-ui/themes";
import Image from "next/image";
import { header, Icons, LoginButton } from "./styles.css";
import type { HeaderProps } from "./types";
import { useState } from "react";

const Header = ({ isLoggedIn }: HeaderProps) => {
  const [isLoggedInState, setIsLoggedInState] = useState(isLoggedIn);
  return (
    <div className={header}>
      <Flex gap="2">
        <Image
          src="/logo.svg"
          alt="Chef UI logo"
          width={60}
          height={60}
          priority
        />{" "}
        <Text
          size="7"
          weight="bold"
          style={{
            color: "white",
            fontFamily: "fantasy",
            font: "400",
            paddingTop: "10px",
          }}
        >
          <Strong>Chefy</Strong>
        </Text>
      </Flex>
      {isLoggedInState ? (
        <Flex gap="6">
          <BackpackIcon className={Icons} /> <PersonIcon className={Icons} />{" "}
        </Flex>
      ) : (
        <Button
          variant="outline"
          className={LoginButton}
          onClick={() => {
            setIsLoggedInState(true);
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
