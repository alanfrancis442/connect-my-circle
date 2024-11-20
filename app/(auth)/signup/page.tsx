"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./index.module.css";
import Link from "next/link";

const registerFormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    // API call here
    setIsLoading(false);
    console.log(data);
  }

  return (
    <div className={styles.signinMain}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageText}>
            <h2>Connect My Circle</h2>
            <p>A smart way to connect.</p>
          </div>
          <img
            src="/signin.jpg"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>

        <div className={styles.formContainer}>
          <h2 className="text-4xl font-bold text-gray-800">
            SignUp for an account
          </h2>
          <p className="mt-2 text-gray-600">Sign up to Connect My Circle</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mt-6 text-left flex flex-col items-center"
            >
              <div className="w-full flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Username"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-3/4 bg-[#4A90E2DD] text-white text-lg flex py-2 rounded-md hover:bg-[#357ABD] transition duration-300"
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </Form>

          <p className="mt-12 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#A54E64]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
