// app/(root)/store/page.tsx

import { ProductCard } from "@/components/product-card";

export default function Page() {
  const products = [
    {
      id: "673cddd212b3f2167728d6a3",
      slug: "pro",
      title: "Basic Card",
      description: "Basic card with a simple design",
      detail: {
        material: "PVC",
        print: "Acrylic",
        size: "15x17",
      },
      price: 500.0,
      mrp: 1000.0,
      currency: "INR",
      images: [],
      card_print_details: [
        "logo",
        "fullname",
        "organization",
        "address",
        "phone",
        "email",
      ],
      colors: ["red", "blue"],
      default_image: "https://via.placeholder.com/150",
      default_video: "None",
      created_at: "2024-11-19T18:51:42.140936+00:00",
    },
    {
      id: "673cddd212b3f2167728d6a4",
      slug: "pro2",
      title: "Advanced Card",
      description: "Advanced card with premium design",
      detail: {
        material: "Metal",
        print: "Laser",
        size: "20x25",
      },
      price: 1500.0,
      mrp: 2000.0,
      currency: "INR",
      images: [],
      card_print_details: [
        "logo",
        "fullname",
        "organization",
        "address",
        "phone",
        "email",
      ],
      colors: ["black", "silver"],
      default_image: "https://via.placeholder.com/150",
      default_video: "None",
      created_at: "2024-11-19T18:51:42.140936+00:00",
    },
    {
      id: "673cddd212b3f2167728d6a5",
      slug: "pro3",
      title: "Premium Card",
      description: "Premium card with exclusive design",
      detail: {
        material: "Gold",
        print: "Embossed",
        size: "25x30",
      },
      price: 2500.0,
      mrp: 3000.0,
      currency: "INR",
      images: [],
      card_print_details: [
        "logo",
        "fullname",
        "organization",
        "address",
        "phone",
        "email",
      ],
      colors: ["gold", "white"],
      default_image: "https://via.placeholder.com/150",
      default_video: "None",
      created_at: "2024-11-19T18:51:42.140936+00:00",
    },
    // ...more products with the same structure
  ];

  return (
    <div className="flex flex-col bg-[#F2F3F7] p-8 min-h-screen">
      <h1 className="text-5xl font-semibold mb-8">All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
