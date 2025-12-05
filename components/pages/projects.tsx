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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "POS App (Point of Sales)",
      desc: "Aplikasi kasir realtime dengan fitur manajemen stok, transaksi, dan laporan penjualan.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      image: "/project1.png",
      demo: "#",
      repo: "#",
    },
    {
      title: "Web Event Management",
      desc: "Platform manajemen acara online, booking tiket, dan sistem pembayaran gateway.",
      tags: ["Next.js Pages", "MongoDB", "Express", "React"],
      image: "/event.png",
      demo: "#",
      repo: "#",
    },
    {
      title: "Network Topology Design",
      desc: "Perancangan topologi jaringan kantor skala menengah menggunakan Cisco Packet Tracer.",
      tags: ["Cisco", "Networking", "Simulation"],
      image: "/project3.jpg",
      demo: "#",
      repo: "#",
    },
  ];

  return (
    <section id="projects" className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Hasil karya coding dan simulasi jaringan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
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
                {/* INI BADGE YANG LU MAU */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4 pb-6 border-t border-gray-100 bg-white">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={item.repo} target="_blank">
                    <FaGithub /> Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gap-2 bg-[#1A73E8] hover:bg-blue-700"
                  asChild
                >
                  <a href={item.demo} target="_blank">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
