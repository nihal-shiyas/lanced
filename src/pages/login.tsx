"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
  Link as NextUILink,
} from "@heroui/react";
import { ArrowLeft, EyeIcon, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation for the demo
    if (formData.username === "user" && formData.password === "1234") {
      setTimeout(() => {
        setIsLoading(false);
        router.push("/works");
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError("Invalid username or password");
      }, 1000);
    }
  };

  return (
    <div className="container py-12">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <NextUILink
            as={Link}
            href="/"
            color="foreground"
            className="flex items-center text-sm font-medium mx-8 gap-2 hover:text-cyan-700"
          >
            <ArrowLeft />
            Back to Home
          </NextUILink>
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="mx-auto max-w-md">
        <Card
          className="shadow-xl shadow-cyan-100 rounded-sm"
          style={{ animation: "flipIn 0.8s ease-out" }}
        >
          <CardHeader className="flex flex-col gap-1 text-center">
            <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
            <p className="text-default-500">
              Login to access the admin dashboard
            </p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-8 px-6">
              {error && (
                <div className="rounded-md bg-danger-100 p-3 text-center text-sm text-danger">
                  {error}
                </div>
              )}

              <div
                className="space-y-2"
                style={{ animation: "slideInUp 0.5s ease-out" }}
              >
                <Input
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  labelPlacement="outside"
                  isRequired
                  value={formData.username}
                  onChange={handleChange}
                  variant="underlined"
                  color="primary"
                  classNames={{
                    input: "w-82 p-2 border-b-2 border-gray-300",
                  }}
                />
              </div>

              <div
                className="space-y-2"
                style={{ animation: "slideInUp 0.7s ease-out" }}
              >
                <Input
                  id="password"
                  name="password"
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  placeholder="Enter your password"
                  labelPlacement="inside"
                  isRequired
                  value={formData.password}
                  onChange={handleChange}
                  variant="underlined"
                  color="primary"
                  classNames={{
                    input: "w-82 p-2 border-b-2 border-gray-300",
                  }}endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeIcon size={20} className="pointer-events-none" />
                      ) : (
                        <EyeOff size={20} className="pointer-events-none" />
                      )}
                    </button>
                  }
                />
              </div>
              <div className="flex w-full justify-center items-center ">

              <Button
                type="submit"
                color="primary"
                className="w-60 flex font-semibold mb-2 p-3 hover:shadow-lg rounded-sm duration-300"
                isDisabled={isLoading}
                isLoading={isLoading}
                style={{ animation: "pulse 2s infinite" }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
