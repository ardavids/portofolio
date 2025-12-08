"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Freelance IT Technician",
      company: "Self-Employed",
      date: "2023 - Sekarang",
      location: "Remote / On-site",
      desc: "Menyediakan jasa perbaikan perangkat keras dan lunak secara mandiri. Berhasil mendiagnosa dan memperbaiki berbagai masalah laptop/PC klien, melakukan instalasi ulang OS (Windows/Linux), serta memberikan konsultasi upgrade spesifikasi hardware untuk performa optimal.",
      skills: [
        "Hardware Troubleshooting",
        "OS Installation",
        "System Maintenance",
        "Client Consulting",
      ],
    },
    {
      role: "IT Support Intern",
      company: "SMK Canda Bhirawa Pare",
      date: "Juli 2021 - Januari 2022",
      location: "Kediri, Jawa Timur",
      desc: "Bertanggung jawab atas pemeliharaan laboratorium komputer. Berkolaborasi dengan tim dalam pembangunan lab baru dan melakukan setup 30+ PC, konfigurasi jaringan LAN, serta troubleshooting rutin hardware dan software untuk mendukung kegiatan belajar mengajar.",
      skills: ["LAN Setup", "PC Assembly", "Network Configuration", "Teamwork"],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#cde8e5] mx-auto px-6 lg:px-12 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Perjalanan karir dan pengalaman praktis di dunia IT Support dan
          Hardware.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300 md:left-1/2 md:-ml-0.5 hidden md:block"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row gap-8 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 hidden md:block"></div>

            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1A73E8] border-4 border-white shadow-md transform -translate-x-1/2 mt-6 hidden md:block"></div>

            <div className="flex-1">
              <Card className="border-l-4 border-l-[#1A73E8] shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {exp.role}
                      </CardTitle>
                      <p className="text-[#1A73E8] font-medium text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 text-gray-500 bg-gray-50 border-gray-200"
                    >
                      <Calendar className="w-3 h-3" /> {exp.date}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-semibold rounded-md uppercase tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
