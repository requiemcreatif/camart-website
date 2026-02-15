"use client";

import axios from "axios";
import { useState } from "react";
import { Navbar } from "@/components/website/Navbar";
import { Hero } from "@/components/website/Hero";
import { ArtistsSection } from "@/components/website/ArtistsSection";
import { NewsSection } from "@/components/website/NewsSection";
import { ContactSection } from "@/components/website/ContactSection";
import { Footer } from "@/components/website/Footer";

type ContactState = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [formState, setFormState] = useState<ContactState>("idle");

  const onContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      lastname: String(formData.get("lastname") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      newsletter: Boolean(formData.get("newsletter")),
    };

    try {
      await axios.post("/api/contact", payload);
      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error("Contact request failed", error);
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/60 text-foreground">
      <Navbar />
      <Hero />
      <ArtistsSection />
      <NewsSection />
      <ContactSection formState={formState} onSubmit={onContactSubmit} />
      <Footer />
    </main>
  );
}
