"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Textarea,
  Chip,
  Divider,
  Breadcrumbs,
  BreadcrumbItem,
  Link as NextUILink,
} from "@heroui/react";
import { ArrowLeft, LogOut, Mail } from "lucide-react";

// Sample enquiry data
const initialEnquiries = [
  {
    id: 1,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1 (555) 987-6543",
    description:
      "I need a photographer for my wedding on June 15th. Looking for someone who specializes in candid shots and can capture the essence of the day.",
    date: "2023-03-15",
    replied: false,
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 (555) 456-7890",
    description:
      "I'm looking for a professional photographer for a corporate event next month. We need someone who can take headshots of our executives and also capture the event.",
    date: "2023-03-14",
    replied: true,
  },
  {
    id: 3,
    name: "David Chen",
    email: "david@example.com",
    phone: "+1 (555) 234-5678",
    description:
      "I need family portraits taken for our holiday cards. We are a family of 5 with 3 young children. Looking for outdoor shots if possible.",
    date: "2023-03-13",
    replied: false,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily@example.com",
    phone: "+1 (555) 876-5432",
    description:
      "I'm interested in booking a maternity photoshoot. I'm due in 2 months and would like to schedule something within the next 2-3 weeks.",
    date: "2023-03-12",
    replied: false,
  },
];

export default function WorksPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [replyText, setReplyText] = useState("");
  const [activeEnquiry, setActiveEnquiry] = useState<number | null>(null);
  const [isReplying, setIsReplying] = useState(false);

  // Check if user is logged in (simple client-side auth for demo)
  useEffect(() => {
    // In a real app, you would check for a token or session
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      // Set logged in status for demo purposes
      sessionStorage.setItem("isLoggedIn", "true");
    }
  }, [router]);

  // Set logged in status for demo purposes
  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", "true");
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  const handleReply = (id: number) => {
    setActiveEnquiry(id);
    setReplyText("");
  };

  const handleSendReply = () => {
    if (!activeEnquiry || !replyText.trim()) return;

    setIsReplying(true);

    // Simulate sending reply
    setTimeout(() => {
      setEnquiries((prev) =>
        prev.map((enquiry) =>
          enquiry.id === activeEnquiry ? { ...enquiry, replied: true } : enquiry
        )
      );

      setActiveEnquiry(null);
      setReplyText("");
      setIsReplying(false);

      alert("Reply sent successfully!");
    }, 1000);
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <Breadcrumbs className="mb-8">
          <BreadcrumbItem>
            <NextUILink
              as={Link}
              href="/"
              color="foreground"
              className="flex items-center text-sm font-medium px-8 gap-2 hover:text-cyan-700"
            >
              <ArrowLeft />
              Back to Home
            </NextUILink>
          </BreadcrumbItem>
        </Breadcrumbs>

        <Button
          color="primary"
          variant="light"
          className="flex items-center text-sm font-medium gap-2 hover:text-cyan-700"
          onClick={handleLogout}
        >
          {" "}
          <LogOut></LogOut>
          Logout
        </Button>
      </div>

      <div
        className="mb-8 p-8"
        style={{ animation: "fadeInWithGlow 1s ease-out" }}
      >
        <h1 className="text-3xl font-bold text-primary">Work Enquiries</h1>
        <p className="text-default-500">
          Manage and respond to customer enquiries
        </p>
      </div>

      <div className="grid gap-6 p-8">
        {enquiries.map((enquiry, index) => (
          <Card
            key={enquiry.id}
            className={`${enquiry.replied ? "shadow-md shadow-cyan-500" : "border-primary shadow-sm shadow-orange-500"}`}
            style={{
              animation: `slideInUp ${0.3 + index * 0.15}s ease-out`,
              transform: "translateZ(0)",
              transition: "all 0.3s ease",
            }}
            isHoverable
          >
            <CardHeader className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{enquiry.name}</h3>
                <div className="flex items-center mt-1 text-default-500">
                  <Mail size={12} className="m-1"/>
                  <span>
                    {enquiry.email} • {enquiry.phone}
                  </span>
                  <Button
                    color="primary"
                    variant="bordered"
                    onClick={() => window.location.href = `mailto:${enquiry.email}`}
                    className="ml-4 text-cyan-800 border border-cyan-800 rounded-sm p-1 flex hover:text-white hover:bg-cyan-800 duration-300"
                  >
                    Send Mail <Mail/>
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-default-500">
                  {new Date(enquiry.date).toLocaleDateString()}
                </span>
                {enquiry.replied ? (
                  <Chip
                    color="default"
                    variant="flat"
                    size="sm"
                    className="ml-2"
                  >
                    Replied
                  </Chip>
                ) : (
                  <Chip
                    color="primary"
                    variant="flat"
                    size="sm"
                    className="ml-2 animate-pulse"
                  >
                    New
                  </Chip>
                )}
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="whitespace-pre-line">{enquiry.description}</p>

              {activeEnquiry === enquiry.id && (
                <div
                  className="mt-4 space-y-4"
                  style={{ animation: "fadeIn 0.5s ease-out" }}
                >
                  <Textarea
                    placeholder="Type your reply here..."
                    minRows={4}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    variant="bordered"
                    color="primary"
                    classNames={{input: "p-2"}}
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      color="default"
                      variant="light"
                      onClick={() => setActiveEnquiry(null)}
                      className="flex hover:shadow-lg rounded-sm p-2 duration-300 "                      
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      onClick={handleSendReply}
                      isDisabled={!replyText.trim() || isReplying}
                      isLoading={isReplying}
                      className="flex hover:shadow-lg rounded-sm p-2 duration-300 "                         
                    >
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
                          >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                      {isReplying ? "Sending..." : "Send Reply"}
                    </Button>
                  </div>
                </div>
              )}
            </CardBody>
            {!enquiry.replied && activeEnquiry !== enquiry.id && (
              <CardFooter>
                <Button
                  color="primary"
                  variant="flat"
                  onClick={() => handleReply(enquiry.id)}
                  className="animate-bounce-subtle"
                >
                  Reply
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
