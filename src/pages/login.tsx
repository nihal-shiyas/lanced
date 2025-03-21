"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
  Link as NextUILink,
} from "@heroui/react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple validation for the demo
    if (formData.username === "user" && formData.password === "1234") {
      setTimeout(() => {
        setIsLoading(false)
        router.push("/works")
      }, 1000)
    } else {
      setTimeout(() => {
        setIsLoading(false)
        setError("Invalid username or password")
      }, 1000)
    }
  }

  return (
    <div className="container py-12">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <NextUILink as={Link} href="/" color="foreground" className="flex items-center text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </NextUILink>
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="mx-auto max-w-md">
        <Card className="shadow-xl" style={{ animation: "flipIn 0.8s ease-out" }}>
          <CardHeader className="flex flex-col gap-1 text-center">
            <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
            <p className="text-default-500">Login to access the admin dashboard</p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <div className="rounded-md bg-danger-100 p-3 text-center text-sm text-danger">{error}</div>}

              <div className="space-y-2" style={{ animation: "slideInUp 0.5s ease-out" }}>
                <Input
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  labelPlacement="outside"
                  isRequired
                  value={formData.username}
                  onChange={handleChange}
                  variant="bordered"
                  color="primary"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-default-400"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                />
              </div>

              <div className="space-y-2" style={{ animation: "slideInUp 0.7s ease-out" }}>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  labelPlacement="outside"
                  isRequired
                  value={formData.password}
                  onChange={handleChange}
                  variant="bordered"
                  color="primary"
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-default-400"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  }
                />
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full font-semibold"
                isDisabled={isLoading}
                isLoading={isLoading}
                style={{ animation: "pulse 2s infinite" }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

