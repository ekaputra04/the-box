import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const emptyForm = {
  name: "",
  email: "",
  reason: "",
  phone: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    setFormData(emptyForm);
  };

  return (
    <>
      <div className="lg:px-96 py-24">
        <h2 className="mb-4 font-bold text-gray-800 text-2xl text-center">
          What can us do for you?
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <form onSubmit={handleSubmit}></form>
        <div className="space-y-4 w-full">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="John Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input type="phone" id="phone" placeholder="08123456789" />
          </div>
          <div>
            <Label htmlFor="select">Reason for Contacting</Label>
            <Select name="select">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Reason for Contacting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea placeholder="Type your message here." className="h-32" />
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
