"use client";

import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 lg:px-12 py-20 pb-32">
      <div className="bg-[#1A73E8] text-white rounded-3xl p-8 lg:p-16 text-center shadow-2xl shadow-blue-200">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          Lulusan TKJ yang memiliki pemahaman kuat di Hardware & Jaringan, serta
          antusias mempelajari sistem manajemen bisnis (POS/ERP) untuk membantu
          operasional perusahaan
          <br />
          <br />
          <span>
            Dan juga saya suka mengikuti perkembangan teknologi hardware pada
            komputer. Saat ini saya aktif mendalami pengembangan sistem berbasis
            web.
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <Button
            className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-8 py-6 font-bold text-md shadow-lg"
            asChild
          >
            <a
              href="https://wa.me/6289612035176?text=Halo%20David%2C%20saya%20tertarik%20bekerja%20sama"
              target="_blank"
            >
              Hubungi Saya
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
