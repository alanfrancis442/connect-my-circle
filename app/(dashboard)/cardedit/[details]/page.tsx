"use client";

import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const [productData, setProductData] = useState<ProductCardProps>({
    id: "",
    slug: "",
    title: "",
    description: "",
    detail: {
      material: "",
      print: "",
      size: "",
    },
    price: 0,
    mrp: 0,
    currency: "INR",
    images: [],
    card_print_details: [],
    colors: [],
    default_image: "",
    default_video: "",
    created_at: new Date().toISOString(),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(productData);
    // Add your save logic here
  };

  const addPrintDetail = () => {
    setProductData((prev) => ({
      ...prev,
      card_print_details: [...prev.card_print_details, ""],
    }));
  };

  const removePrintDetail = (index: number) => {
    setProductData((prev) => ({
      ...prev,
      card_print_details: prev.card_print_details.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-w-8xl mx-auto md:p-16 p-6 mt-10">
      <div className="grid lg:grid-cols-2 md:gap-32 gap-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Edit Card Details</h1>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src={productData.default_image || "/showcase/card2.webp"}
              alt="Card Preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Card Title</Label>
                  <Input
                    id="title"
                    value={productData.title}
                    onChange={(e) =>
                      setProductData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={productData.description}
                    onChange={(e) =>
                      setProductData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      value={productData.price}
                      onChange={(e) =>
                        setProductData((prev) => ({
                          ...prev,
                          price: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mrp">MRP</Label>
                    <Input
                      id="mrp"
                      type="number"
                      value={productData.mrp}
                      onChange={(e) =>
                        setProductData((prev) => ({
                          ...prev,
                          mrp: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Print Details</Label>
                  {productData.card_print_details.map((detail, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={detail}
                        onChange={(e) => {
                          const newDetails = [
                            ...productData.card_print_details,
                          ];
                          newDetails[index] = e.target.value;
                          setProductData((prev) => ({
                            ...prev,
                            card_print_details: newDetails,
                          }));
                        }}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removePrintDetail(index)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={addPrintDetail}
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Print Detail
                  </Button>
                </div>

                <Button className="w-full" size="lg" type="submit">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
