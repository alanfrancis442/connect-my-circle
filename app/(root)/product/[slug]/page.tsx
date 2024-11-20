// app/product/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import { Package2, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

const Page = () => {
  const [productData, setProductData] = useState<ProductCardProps | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    designation: "",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    const encodedData = searchParams.get("data");
    if (encodedData) {
      const decodedProduct = JSON.parse(decodeURIComponent(encodedData));
      setProductData(decodedProduct);
    }
  }, [searchParams]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-semibold">{productData.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">₹{productData.price}</span>
              <span className="text-sm text-muted-foreground line-through">
                ₹{productData.mrp}
              </span>
              <span className="text-sm text-orange-500">(10% OFF)</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            (MRP incl. of all taxes.)
          </p>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/showcase/card2.webp"
              alt="Gold Metal Business Card Template"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Fill the details to be{" "}
                <span className="text-orange-500">printed on the card</span>
              </h2>

              <form onSubmit={handelSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name*</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span>+91</span>
                    </div>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        designation: e.target.value,
                      }))
                    }
                  />
                </div>

                <Button className="w-full" size="lg">
                  Buy Now
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 border rounded-lg">
              <Package2 className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">1 years Replacement Guarantee*</p>
            </div>
            <div className="p-4 border rounded-lg">
              <Truck className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">All India Shipping Available</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Description</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimensions</span>
                  <span>8.6 * 5.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight</span>
                  <span>50 grams</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Print</span>
                  <span>Laser Engraving</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span>Metal</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {productData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
