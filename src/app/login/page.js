"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const LoginPage = () => {
  return (
    <div className="mt-10 px-2 lg:px-0">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Separator />
            <CardTitle className="text-md text-center">
              Login Using Social Media
            </CardTitle>
            <div className="md:flex items-center gap-2 lg:space-y-0 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Github Login
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
              >
                <FcGoogle className="mr-2 h-4 w-4" /> Google Login
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
