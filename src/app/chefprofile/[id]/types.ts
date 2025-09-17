export interface ChefProfileProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: {
    customerName: string;
    comment: string;
    customerPhotoUrl: string;
    rating: number;
  }[];
  address: string;
  price: string;
  about: string;
  experience: number;
  languages: string[];
  specialties: string[];
  photoUrl: string;
  foodphotoUrl: string[];
  gender: string;
}

export type ChefInfoCapsuleProps = Pick<ChefProfileProps, "rating" | "reviews">;

export type GalleryProps = Pick<ChefProfileProps, "foodphotoUrl">;

export type ChefReviewProps = Pick<
  ChefProfileProps,
  "name" | "photoUrl" | "reviews" | "gender" | "experience"
>;
