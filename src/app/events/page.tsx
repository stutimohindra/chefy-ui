"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useMemo, useState } from "react";
import MarkerPriceIcon from "../icons/MarkerPriceIcon";
import CustomOverlay from "./CustomOverlay";
import Header from "../ui-header/Header";
import ChefCard from "../_cards/ChefCard";
import { Flex } from "@radix-ui/themes";
import type { PositionsProps } from "./types";

const positions: PositionsProps = [
  {
    id: "p1",
    lat: 53.56,
    lng: 10.02,
    price: "10€",
    name: "Teodros Girmay",
    cuisine: "Ethiopian",
    rating: 5,
    address: "Berlin, Germany",
  },
  {
    id: "p2",
    lat: 53.535,
    lng: 10.03,
    price: "12€",
    name: "Chef 2",
    cuisine: "Italian",
    rating: 4,
    address: "Hamburg, Germany",
  },
  {
    id: "p3",
    lat: 53.57,
    lng: 9.98,
    price: "14€",
    name: "Chef 3",
    cuisine: "French",
    rating: 3,
    address: "Munich, Germany",
  },
  {
    id: "p4",
    lat: 53.52,
    lng: 10.04,
    price: "16€",
    name: "Chef 4",
    cuisine: "Japanese",
    rating: 5,
    address: "Cologne, Germany",
  },
  {
    id: "p5",
    lat: 53.59,
    lng: 10.12,
    price: "18€",
    name: "Chef 5",
    cuisine: "Indian",
    rating: 4,
    address: "Frankfurt, Germany",
  },
  {
    id: "p6",
    lat: 53.48,
    lng: 10.2,
    price: "20€",
    name: "Chef 6",
    cuisine: "Chinese",
    rating: 3,
    address: "Stuttgart, Germany",
  },
  {
    id: "p7",
    lat: 53.62,
    lng: 10.3,
    price: "22€",
    name: "Chef 7",
    cuisine: "Mexican",
    rating: 5,
    address: "Düsseldorf, Germany",
  },
  {
    id: "p8",
    lat: 53.4,
    lng: 9.95,
    price: "24€",
    name: "Chef 8",
    cuisine: "Thai",
    rating: 4,
    address: "Leipzig, Germany",
  },
  {
    id: "p9",
    lat: 53.7,
    lng: 10.1,
    price: "26€",
    name: "Chef 9",
    cuisine: "Spanish",
    rating: 3,
    address: "Dortmund, Germany",
  },
  {
    id: "p10",
    lat: 53.55,
    lng: 10.33,
    price: "28€",
    name: "Chef 10",
    cuisine: "Greek",
    rating: 5,
    address: "Essen, Germany",
  },
];

export default function BerlinRadiusMarkers() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selectedPos = selectedIdx != null ? positions[selectedIdx] : null;
  const fallbackCenter = useMemo(
    () => positions[0] ?? { lat: 53.54992, lng: 10.00678 },
    [positions]
  );

  return (
    <>
      <Header isLoggedIn={false} />
      <>
        <div
          style={{
            height: "600px",
            width: "600px",
            padding: "0px",
            borderWidth: "0px",
            marginTop: "24px",
            position: "sticky",
            float: "right",
            top: "48px",
            touchAction: "pan-x pan-y",
          }}
        >
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          >
            <Map
              mapId={"abcd1234efghijkl"}
              defaultCenter={fallbackCenter}
              defaultZoom={8}
              gestureHandling="greedy"
              disableDefaultUI
            >
              {positions.map((pos, i) => {
                return (
                  <div
                    key={pos.id}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <Marker
                      icon={{
                        url: MarkerPriceIcon(pos.price),
                      }}
                      position={pos}
                      onClick={() => setSelectedIdx(i)}
                    />
                  </div>
                );
              })}
              {selectedPos && (
                <CustomOverlay position={selectedPos} pane="overlayMouseTarget">
                  <div
                    style={{
                      transform: "translate(-50%, 2px)",
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                      padding: 12,
                      minWidth: 180,
                    }}
                  >
                    <ChefCard
                      cuisine={selectedPos.cuisine}
                      rating={selectedPos.rating}
                      name={selectedPos.name}
                      address={selectedPos.address}
                      price={selectedPos.price}
                      shouldShowCloseButton={true}
                      onClick={() => setSelectedIdx(null)}
                    />
                  </div>
                </CustomOverlay>
              )}
            </Map>
          </APIProvider>
        </div>
      </>
      <>
        <Flex direction={"row"} gap="4" wrap="wrap">
          {positions.map((pos, i) => {
            return (
              <ChefCard
                key={i}
                cuisine={pos.cuisine}
                rating={pos.rating}
                name={pos.name}
                address={pos.address}
                price={pos.price}
              />
            );
          })}
        </Flex>
      </>
    </>
  );
}
