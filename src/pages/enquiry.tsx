"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Breadcrumbs,
  BreadcrumbItem,
  Link as NextUILink,
} from "@heroui/react";
import { ArrowLeft, Send } from "lucide-react";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Enquiry submitted successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    }, 1500);
  };

  return (
    <div className="container py-8">
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

      <div className="mx-auto max-w-2xl">
        <Card
          className="animate-fadeIn shadow-xl shadow-cyan-100 rounded-sm"
          style={{ animation: "floatIn 0.8s ease-out" }}
        >
          <CardHeader className="flex flex-col gap-1 text-center">
            <h1 className="text-3xl font-bold text-primary">
              Contact our Designers
            </h1>
            <p className="text-default-500">
              Fill out the form below to enquire about our design services
            </p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-8 px-6">
              <div
                className="space-y-2"
                style={{ animation: "slideInRight 0.5s ease-out" }}
              >
                <Input
                  id="name"
                  placeholder="Full Name"
                  isRequired
                  value={formData.name}
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
                style={{ animation: "slideInRight 0.7s ease-out" }}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  isRequired
                  value={formData.email}
                  onChange={handleChange}
                  variant="underlined"
                  color="primary"
                  className="max-w-full"
                  classNames={{
                    input: "w-82 p-2 border-b-2 border-gray-300",
                  }}
                />
              </div>

              <div
                className="space-y-2"
                style={{ animation: "slideInRight 0.9s ease-out" }}
              >
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  isRequired
                  value={formData.phone}
                  onChange={handleChange}
                  variant="underlined"
                  color="primary"
                  className="max-w-full"
                  classNames={{
                    input: "w-82 p-2 border-b-2 border-gray-300",
                  }}
                />
              </div>

              <div
                className="space-y-2"
                style={{ animation: "slideInRight 1.1s ease-out" }}
              >
                <Textarea
                  id="description"
                  name="description"
                  label="Tell us about your project"
                  placeholder="Describe the design work you need..."
                  labelPlacement="outside"
                  isRequired
                  value={formData.description}
                  onChange={handleChange}
                  variant="underlined"
                  color="primary"
                  minRows={5}
                  className="max-w-full h-40"
                  classNames={{
                    input: "p-2 border-2 border-gray-300 rounded-lg",
                  }}
                />
              </div>
              <div className="flex w-full justify-center items-center ">
                <Button
                  type="submit"
                  color="primary"
                  className="w-60 flex font-semibold mb-2 p-6 hover:shadow-lg rounded-sm duration-300"
                  isDisabled={isSubmitting}
                  isLoading={isSubmitting}
                  style={{ animation: "pulse 2s infinite" }}
                >
                  {" "}
                  <Send />
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
