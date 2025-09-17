import React from "react";
import { Avatar, Flex, Separator, Text } from "@radix-ui/themes";
import Header from "@/app/ui-header/Header";
import Gallery from "./Gallery";
import ChefInfoCapsule from "./ChefInfoCapsule";
import ChefReview from "./ChefReview";
import type { ChefProfileProps } from "./types";
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
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        rating: 5,
      },
      {
        customerName: "Charlotte M.",
        comment: "The crème brûlée was a masterpiece.",
        customerPhotoUrl: "https://randomuser.me/api/portraits/women/90.jpg",
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
  },
];

const ChefProfile = ({ id = "chef_005" }: { id: string }) => {
  const chef = sampleChefs.find((chef) => chef.id === id);
  return (
    <>
      <Header isLoggedIn={true} />
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
          <DatePicker />
        </Flex>
        <ChefReview
          name={chef?.name!}
          photoUrl={chef?.photoUrl!}
          reviews={chef?.reviews!}
          gender={chef?.gender!}
          experience={chef?.experience!}
        />
      </div>
    </>
  );
};

export default ChefProfile;
