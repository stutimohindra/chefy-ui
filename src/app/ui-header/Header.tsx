"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BackpackIcon, PersonIcon } from "@radix-ui/react-icons";
import { Strong, Text, Flex, Button } from "@radix-ui/themes";
import { header, Icons, LoginButton } from "./styles.css";
import type { HeaderProps } from "./types";

const LOCALSTORAGE_KEY = "chef:hold";

const Header = ({ isLoggedIn, isChefbooked, isTimerComplete }: HeaderProps) => {
  const [isLoggedInState, setIsLoggedInState] = useState(isLoggedIn);
  const [remaining, setRemaining] = useState(600);
  const [bookingStatus, setBookingStatus] = useState(isChefbooked);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const isBooked = document.cookie.includes("ch_isChefBooked=true");
      setBookingStatus(isBooked);
    }
  });

  useEffect(() => {
    if (!bookingStatus || typeof window === "undefined") return;

    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    let endMs = saved ? Number(saved) : Date.now() + 600 * 1000;

    if (!saved) {
      localStorage.setItem(LOCALSTORAGE_KEY, String(endMs));
    }

    const now = Date.now();
    const initialRemaining = Math.max(0, Math.floor((endMs - now) / 1000));
    setRemaining(initialRemaining);

    if (initialRemaining === 0) {
      localStorage.removeItem(LOCALSTORAGE_KEY);
      return;
    }

    const id = setInterval(() => {
      const currentTime = Date.now();
      const newRemaining = Math.max(
        0,
        Math.floor((endMs - currentTime) / 1000)
      );

      setRemaining(newRemaining);

      if (newRemaining === 0) {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        clearInterval(id);
        document.cookie = "ch_isChefBooked=false";
        isTimerComplete?.(true);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [bookingStatus]);

  const mm = String(Math.floor(Number(remaining) / 60));
  const ss = String(Number(remaining) % 60).padStart(2, "0");

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
        <Flex gap="6" align={"center"}>
          <Flex
            gap="2"
            direction={"column"}
            align={bookingStatus ? "baseline" : "center"}
          >
            <BackpackIcon className={Icons} />
            {bookingStatus && mm !== "00" && ss !== "00" && (
              <div style={{ color: "white" }}>{`${mm} : ${ss}`}</div>
            )}
          </Flex>
          <PersonIcon className={Icons} />{" "}
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
