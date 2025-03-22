import { Card, Button, Modal, Input, Textarea } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';

export function Designers() {
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, name: "John Doe", image: "/demo.jpg", description: "Portrait and landscape photographer with 5+ years of experience" },
    { id: 2, name: "Jane Smith", image: "/demo.jpg", description: "Specializing in wedding and event photography" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDesigner, setNewDesigner] = useState({ name: "", image: "", description: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewDesigner((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDesigner = () => {
    setPortfolioItems((prev) => [
      ...prev,
      { ...newDesigner, id: prev.length + 1, image: "/demo.jpg" }, // Assuming a default image for now
    ]);
    setNewDesigner({ name: "", image: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Designers</h1>
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-primary">Our Designers</h2>
          <div className="mt-8 flex flex-col md:flex-row justify-center align-center space-around p-12">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="w-[60%] hover:w-[62%] m-8 p-6 shadow-sm hover:shadow-cyan-100 shadow-lg rounded-lg duration-300">
                <Image src={item.image} alt={item.name} width={400} height={500} className="rounded-md" />
                <h3 className="mt-4 text-xl font-semibold text-primary">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button onClick={() => setIsModalOpen(true)} className="bg-cyan-500 font-bold text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300">
              Add Designer
            </Button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Designer</h2>
        <Input
          name="name"
          placeholder="Name"
          value={newDesigner.name}
          onChange={handleInputChange}
          className="mb-4"
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={newDesigner.description}
          onChange={handleInputChange}
          className="mb-4"
        />
        <div className="flex justify-end">
          <Button onClick={handleAddDesigner} className="bg-cyan-500 font-bold text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300">
            Add Designer
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Designers;