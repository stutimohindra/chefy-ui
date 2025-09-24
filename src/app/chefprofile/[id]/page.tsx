"use client";
import React, { use, useState } from "react";
import { AlertDialog, Avatar, Flex, Text } from "@radix-ui/themes";
import Header from "@/app/ui-header/Header";
import Gallery from "./Gallery";
import ChefInfoCapsule from "./ChefInfoCapsule";
import ChefReview from "./ChefReview";
import { BookingStatus, ChefProfileProps } from "./types";
import { galleryWrap } from "./styles.css";
import DatePicker from "./Calender";

export const sampleChefs: ChefProfileProps[] = [
  {
    id: "chef_001",
    name: "Ricardi Bianchi",
    cuisine: "Italian",
    rating: 4.7,
    reviews: [
      {
        customerName: "Sophia L.",
        comment: "Chef Ricardi made the best homemade pasta I’ve ever tasted!",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 0,
      },
    ],
    address: "123 Via Roma, Milan, Italy",
    price: "$50/hour",
    about:
      "Ricardi is a passionate Italian chef with over a decade of experience in fine dining. He specializes in fresh, handmade pasta and authentic Mediterranean flavors.",
    experience: 12,
    languages: ["Italian", "English"],
    specialties: ["Fresh Pasta", "Risotto", "Tiramisu"],
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    foodphotoUrl: [
      "https://images.unsplash.com/photo-1627308595184-ff8f9d5461be",
      "https://images.unsplash.com/photo-1589308078055-98b85a1c7dcd",
    ],
    gender: "",
    availability: [],
  },
  {
    id: "chef_002",
    name: "Ananya Sharma",
    cuisine: "Indian",
    rating: 4.9,
    reviews: [
      {
        customerName: "David P.",
        comment: "The butter chicken and naan were absolutely authentic!",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/78.jpg",
        rating: 0,
      },
    ],
    address: "Connaught Place, New Delhi, India",
    price: "₹2,500/meal",
    about:
      "Ananya specializes in North Indian cuisine with a modern twist. She’s known for balancing traditional spices with contemporary presentation.",
    experience: 8,
    languages: ["Hindi", "English"],
    specialties: ["Butter Chicken", "Paneer Tikka", "Biryani"],
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    foodphotoUrl: [
      "https://images.unsplash.com/photo-1627308595184-ff8f9d5461be",
      "https://images.unsplash.com/photo-1589308078055-98b85a1c7dcd",
    ],
    gender: "",
    availability: [],
  },
  {
    id: "chef_003",
    name: "Kenji Nakamura",
    cuisine: "Japanese",
    rating: 4.8,
    reviews: [
      {
        customerName: "Emily R.",
        comment: "The sushi was fresh and beautifully crafted.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/30.jpg",
        rating: 0,
      },
    ],
    address: "Shibuya, Tokyo, Japan",
    price: "¥7,000/meal",
    about:
      "Kenji brings the art of sushi and kaiseki dining to your home. With 15 years in Tokyo’s top restaurants, his focus is on precision and seasonal ingredients.",
    experience: 15,
    languages: ["Japanese", "English"],
    specialties: ["Sushi", "Ramen", "Tempura"],
    photoUrl: "https://randomuser.me/api/portraits/men/85.jpg",
    foodphotoUrl: [
      "https://images.unsplash.com/photo-1627308595184-ff8f9d5461be",
      "https://images.unsplash.com/photo-1589308078055-98b85a1c7dcd",
    ],
    gender: "",
    availability: [],
  },
  {
    id: "chef_004",
    name: "Maria Gonzalez",
    cuisine: "Mexican",
    rating: 4.6,
    reviews: [
      {
        customerName: "Carlos D.",
        comment: "The tacos al pastor were bursting with flavor!",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/50.jpg",
        rating: 0,
      },
    ],
    address: "Coyoacán, Mexico City, Mexico",
    price: "$40/hour",
    about:
      "Maria celebrates authentic Mexican street food with a homestyle touch. From tacos to tamales, she brings fiesta flavors to your table.",
    experience: 10,
    languages: ["Spanish", "English"],
    specialties: ["Tacos al Pastor", "Tamales", "Guacamole"],
    photoUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    foodphotoUrl: [
      "https://images.unsplash.com/photo-1627308595184-ff8f9d5461be",
      "https://images.unsplash.com/photo-1589308078055-98b85a1c7dcd",
    ],
    gender: "",
    availability: [],
  },
  {
    id: "chef_005",

    name: "Jean-Pierre Dubois",
    cuisine: "French",
    rating: 3.9,
    reviews: [
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Liam P.",
        comment: "The pasta was cooked to perfection, reminded me of Rome.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
      },
      {
        customerName: "Sophia K.",
        comment: "Loved the spices in the curry, authentic and flavorful.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
      },
      {
        customerName: "Ethan J.",
        comment: "Great presentation, though the steak could have been hotter.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 3,
      },
      {
        customerName: "Amelia R.",
        comment: "The sushi rolls were fresh and beautifully plated.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5,
      },
      {
        customerName: "Noah D.",
        comment: "Desserts were divine, but portion sizes a bit small.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 4,
      },
      {
        customerName: "Isabella W.",
        comment: "Our chef was so friendly and explained each dish.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/62.jpg",
        rating: 5,
      },
      {
        customerName: "James L.",
        comment: "The paella was excellent, just like in Valencia.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
      },
      {
        customerName: "Mia T.",
        comment: "Lovely vegetarian options, creative and tasty.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/77.jpg",
        rating: 4,
      },
      {
        customerName: "Oliver C.",
        comment: "Best experience we’ve had at home dining, highly recommend!",
        customerPhotoUrl: "https://randomuser.me/api/portraits/men/53.jpg",
        rating: 5,
      },
    ],
    address: "Le Marais, Paris, France",
    price: "€60/hour",
    about:
      "Jean-Pierre combines traditional French techniques with a creative flair. His menus often feature wine pairings and seasonal delicacies.",
    experience: 9,
    languages: ["French", "English"],
    specialties: ["Coq au Vin", "Crème Brûlée", "Bouillabaisse"],
    photoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    foodphotoUrl: [
      "https://pub-c6c8a449d9614c1cab47358267aa7cf0.r2.dev/eggs.jpg",
      "https://pub-c6c8a449d9614c1cab47358267aa7cf0.r2.dev/peach.avif",
      "https://pub-c6c8a449d9614c1cab47358267aa7cf0.r2.dev/salad.avif",
      "https://pub-c6c8a449d9614c1cab47358267aa7cf0.r2.dev/toast.avif",
      "https://pub-c6c8a449d9614c1cab47358267aa7cf0.r2.dev/toast.avif",
    ],
    gender: "Female",
    availability: [
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
    ],
  },
];

const ChefProfile = ({ id = "chef_005" }: { id: string }) => {
  const chef = sampleChefs.find((chef) => chef.id === id);
  const [chefBookingStatus, setChefBookingStatus] = useState<BookingStatus>();
  const [onTimerComplete, setOnTimerComplete] = useState(false);

  return (
    <>
      <Header
        isLoggedIn={true}
        isChefbooked={chefBookingStatus === BookingStatus.RESERVED}
        isTimerComplete={(val) => {
          setOnTimerComplete(val);
        }}
      />
      <div className={galleryWrap}>
        <Text
          as="div"
          size="7"
          weight="bold"
          align={"center"}
          style={{ paddingBottom: "12px" }}
        >
          Chef Profile Page of {chef?.name}
        </Text>
        <Gallery foodphotoUrl={chef?.foodphotoUrl!} />
        <Text
          as="div"
          size="7"
          weight="bold"
          align={"left"}
          style={{ paddingTop: "12px", paddingBottom: "12px" }}
        >
          Best {chef?.cuisine} chef in Town
        </Text>
        <ChefInfoCapsule rating={chef?.rating!} reviews={chef?.reviews!} />
        <Flex direction={"row"} justify={"between"}>
          <>
            <Flex direction={"row"} gap="5">
              <Avatar
                size="8"
                src={chef?.photoUrl}
                fallback={chef?.name.charAt(0)!}
              />
              <Flex direction={"column"} gap="2">
                <Text weight={"bold"}>{chef?.name}</Text>
                <Text>{chef?.gender}</Text>
                <Text>Superhost. {chef?.experience} years hosting</Text>
              </Flex>
            </Flex>
          </>
          <DatePicker
            availability={chef?.availability!}
            onChefBooked={(status: BookingStatus): void => {
              setChefBookingStatus(status);
              document.cookie = "ch_isChefBooked=true; max-age=600";
            }}
          />
        </Flex>
        <ChefReview
          name={chef?.name!}
          photoUrl={chef?.photoUrl!}
          reviews={chef?.reviews!}
          gender={chef?.gender!}
          experience={chef?.experience!}
        />
        <>
          <AlertDialog.Root open={onTimerComplete}>
            <AlertDialog.Content className="AlertDialogContent">
              <AlertDialog.Title className="AlertDialogTitle">
                Are you absolutely sure?
              </AlertDialog.Title>
              <AlertDialog.Description className="AlertDialogDescription">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialog.Description>
              <div
                style={{
                  display: "flex",
                  gap: 25,
                  justifyContent: "flex-end",
                }}
              >
                <AlertDialog.Cancel>
                  <button className="Button mauve">Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <button className="Button red">Yes, delete account</button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </>
      </div>
    </>
  );
};

export default ChefProfile;
