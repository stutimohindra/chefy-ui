"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
// import * as motion from "motion/react-client";
import "react-day-picker/dist/style.css";
import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { ToggleGroup } from "radix-ui";
import { toggleStyles } from "./styles.css";
import { BookingStatus } from "./types";

export default function BookingWidget({
  availability,
  onChefBooked,
}: {
  availability: string[];
  onChefBooked: (status: BookingStatus) => void;
}) {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>(availability[0]);
  const [chefStatus, setChefStatus] = useState("Book Chef");
  //   const [fly, setFly] = useState<{ x: number; y: number } | null>(null);

  //   function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
  //     const rect = (e.target as HTMLElement).getBoundingClientRect();
  //     const cart = document.getElementById("cart-icon")!.getBoundingClientRect();

  //     const x = cart.left - rect.left;
  //     const y = cart.top - rect.top;

  //     setFly({ x, y });

  //     setTimeout(() => setFly(null), 1000);
  //   }

  const handleBook = () => {
    if (date && selectedTime != "") {
      const iso = new Date(
        `${format(date, "yyyy-MM-dd")}T${selectedTime}:00`
      ).toISOString();

      console.log("Booking at", iso);
      setChefStatus("Reserved");
      onChefBooked(BookingStatus.RESERVED);
      document.cookie = "ch_isChefBooked=true; max-age=600";

      // call API here
    }
  };

  return (
    <div className="space-y-4 rounded-xl border p-4">
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[
          { before: new Date() },
          { from: new Date(2025, 9, 19), to: new Date(2025, 9, 25) },
        ]}
      />
      <Flex gap="6">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Select Time
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <ToggleGroup.Root
              type="single"
              value={selectedTime ?? ""}
              onValueChange={(val) => {
                if (val !== "") {
                  setSelectedTime(val as any);
                }
              }}
            >
              {availability.map((time, i) => (
                <ToggleGroup.Item key={i} value={time} className={toggleStyles}>
                  {time}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Button disabled={!date || !setSelectedTime} onClick={handleBook}>
          {chefStatus}
        </Button>
        {/* {fly && (
          <motion.div
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: fly.x, y: fly.y, scale: 0.3, opacity: 0.8 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute w-8 h-8 bg-blue-400 rounded-full pointer-events-none"
          />
        )} */}
      </Flex>
    </div>
  );
}
