import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, Card, Navbar } from "@heroui/react";

export default function Home() {
  const portfolioItems = [
    { id: 1, name: "John Doe", image: "/demo.jpg", description: "Portrait and landscape photographer with 5+ years of experience" },
    { id: 2, name: "Jane Smith", image: "/demo.jpg", description: "Specializing in wedding and event photography" },
  ];

  const works = [
    { id: 1, title: "Mountain Sunset", image: "/demo.jpg", photographer: "John Doe" },
    { id: 2, title: "Beach Wedding", image: "/demo.jpg", photographer: "Jane Smith" },
    { id: 3, title: "Urban Portrait", image: "/demo.jpg", photographer: "John Doe" },
    { id: 4, title: "Family Gathering", image: "/demo.jpg", photographer: "Jane Smith" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar className="shadow-md p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">Lanced</Link>
        <div className="hidden sm:flex gap-6">
          <Link href="/" className="text-md font-bold text-gray-700 hover:underline underline-offset-8">Home</Link>
          <Link href="/enquiry" className="text-md font-bold text-gray-700 hover:underline underline-offset-8 bold">Enquiry</Link>
          <Link href="#works" className="text-md font-bold text-gray-700 hover:underline underline-offset-8 bold">Works</Link>
        </div>
        <Button as={Link} href="/enquiry" color="primary" className=" font-bold hidden md:flex border-cyan-700 border-2 p-2 hover:bg-cyan-700 hover:text-white rounded-md text-cyan-700 duration-300">
          Enquire Now <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Navbar>

      <main className="flex-1">
        <section className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-brown-900 to-cyan-700 relative">
            <div className="relative z-10 text-center text-white flex flex-col items-center" style={{ animation: "slideInRight 0.5s ease-out" }}>
            <h1 className="text-8xl font-bold">Lanced <br /><span className="text-black">Designs</span></h1>
            <p className="mt-4 mb-8 font-bold text-xl">Desingning creations that last a lifetime</p>
            <Button as={Link} href="/enquiry" variant="bordered" size="lg" className="font-bold border-white border-2 p-3 mt-2 rounded-[30%] flex hover:bg-white hover:text-cyan-700 duration-300">
              Book a Design <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold text-primary">Our Designers</h2>
            <div className=" mt-8 flex flex-col md:flex-row justify-center align-center space-around p-12">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="w-[60%] hover:w-[62%] m-8 p-6 shadow-sm hover:shadow-cyan-100 shadow-lg rounded-lg duration-300">
                  <Image src={item.image} alt={item.name} width={400} height={500} className="rounded-md" />
                  <h3 className="mt-4 text-xl font-semibold text-primary">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100" id="works">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold text-primary">Review our Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {works.map((work) => (
                <Card key={work.id} className="shadow-lg p-4 animate-fadeIn"
                style={{ animation: "floatIn 0.8s ease-out" }}>
                  <Image src={work.image} alt={work.title} width={400} height={300} className="rounded-md" />
                  <h3 className="mt-4 text-lg font-semibold">{work.title}</h3>
                  <p className="text-gray-500">by {work.photographer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Lanced Photography. All rights reserved.
      </footer>
    </div>
  );
}
