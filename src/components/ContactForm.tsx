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
      <div className="bg-slate-50 px-8 md:px-16 lg:px-96 py-24">
        <h2 className="mb-4 font-bold text-blue-900 text-2xl text-center">
          What can us do for you?
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <form onSubmit={handleSubmit}></form>
        <div className="space-y-4 w-full">
          <div>
            <Label className="text-blue-900" htmlFor="name">
              Name
            </Label>
            <Input
              className="bg-white"
              type="name"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label className="text-blue-900" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-white"
              type="email"
              id="email"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label className="text-blue-900" htmlFor="phone">
              Phone
            </Label>
            <Input
              className="bg-white"
              type="phone"
              id="phone"
              placeholder="08123456789"
            />
          </div>
          <div>
            <Label className="text-blue-900" htmlFor="select">
              Reason for Contacting
            </Label>
            <Select name="select">
              <SelectTrigger className="bg-white w-full">
                <SelectValue placeholder="Reason for Contacting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            placeholder="Type your message here."
            className="bg-white h-32"
          />
          <Button className="bg-blue-900 hover:bg-blue-950 w-full">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
