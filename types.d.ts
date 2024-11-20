// TypeScript interface for the product data
interface ProductCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  detail: {
    material: string;
    print: string;
    size: string;
  };
  price: number;
  mrp: number;
  currency: string;
  images: string[];
  card_print_details: string[];
  colors: string[];
  default_image: string;
  default_video: string;
  created_at: string;
}
