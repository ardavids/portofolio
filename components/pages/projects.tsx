"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "POS App (Point of Sales)",
      desc: "Aplikasi kasir realtime dengan fitur manajemen stok, transaksi, dan laporan penjualan.",
      tags: ["Typscript", "Next.js App", "Supabase", "Midtrans", "Tailwind"],
      image: "/cafepos.png",
      demo: "#",
      repo: "#",
    },
    {
      title: "Web Event Management",
      desc: "Platform manajemen acara online, booking tiket, dan sistem pembayaran gateway.",
      tags: [
        "Typescript",
        "Next.js Pages",
        "MongoDB",
        "Express",
        "React",
        "Tailwind",
        "NodeJS",
        "Midtrans",
      ],
      image: "/event.png",
      demo: "#",
      repo: "#",
    },
    // {
    //   title: "Network Topology Design",
    //   desc: "Perancangan topologi jaringan kantor skala menengah menggunakan Cisco Packet Tracer.",
    //   tags: ["Cisco", "Networking", "Simulation"],
    //   image: "/project3.jpg",
    //   demo: "#",
    //   repo: "#",
    // },
  ];

  return (
    <section id="projects" className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            project ini dibuat dengan studi kasus nyata yang sedang saya
            pelajari dan dalam pengembangan.
            <br /> Demo akan ditampilkan setelah progress selesai!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 p-0"
            >
              <div className="relative w-full h-48 bg-white flex overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="flex items-center justify-center h-full text-gray-400 font-medium">
                  Image Preview
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="grow space-y-4">
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal bg-blue-50 text-blue-500 hover:bg-blue-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4 pt-4 pb-6 border-t border-gray-100 bg-gray-50/50">
                <Button
                  size="sm"
                  disabled={true}
                  className="flex-1 gap-2 bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-200"
                >
                  <FaExternalLinkAlt /> Demo Soon
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
