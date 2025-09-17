export interface ChefCardProps {
  cuisine: string;
  rating: number;
  name: string;
  address: string;
  price: string;
  shouldShowCloseButton?: boolean;
  onClick?: () => void;
}
