"use client";
import Layout from "@/components/Layout";
import { useParams } from "next/navigation";
import { useState } from "react";
export default function Instruct() {
  const { id } = useParams();
  const pdfOptions = [
    {
      id: 0,
      label:
        "Quyết định 281/QĐ-BVLBP ngày 14/11/2024 của Bệnh viện Lao và Bệnh phổi Khánh Hòa về việc ban hành Danh mục Quy trình chuyên môn kỹ thuật thực hiện tại Bệnh viện Lao và Bệnh phổi Khánh Hòa",
      url: "/files/quyet-dinh/281.pdf",
    },
    { id: 1, label: "QĐ 15/QĐ-BVLBP", url: "/files/quyet-dinh/qd-15.pdf" },
    { id: 2, label: "QĐ 162/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-162.pdf" },
    { id: 3, label: "QĐ 255/QĐ-BVLBP", url: "/files/quyet-dinh/qd-255.pdf" },
    { id: 4, label: "QĐ 294/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-294.pdf" },
    { id: 5, label: "QĐ 293/QĐ-BVLBP", url: "/files/quyet-dinh/qd-293.pdf" },
    { id: 6, label: "QĐ 295/QĐ-BVLBP", url: "/files/quyet-dinh/qd-295.pdf" },
    { id: 7, label: "QĐ 296/QĐ-BVLBP", url: "/files/quyet-dinh/qd-296.pdf" },
    { id: 8, label: "QĐ 253/QĐ-BVLBP", url: "/files/quyet-dinh/qd-253.pdf" },
    { id: 9, label: "QĐ 292/QĐ-BVLBP", url: "/files/quyet-dinh/qd-292.pdf" },
    { id: 10, label: "QĐ 113/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-113.pdf" },
    { id: 11, label: "QĐ 112/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-112.pdf" },
    { id: 12, label: "QD 429/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-429.pdf" },
    { id: 13, label: "QD 428/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-428.pdf" },
    { id: 14, label: "QD 222/QĐ-BVLBP", url: "/files/quyet-dinh/qd-222.pdf" },
    { id: 15, label: "QD 257/QĐ-BVLBP", url: "/files/quyet-dinh/qd-257.pdf" },
    { id: 16, label: "QD 01/QĐ-BVLBP", url: "/files/quyet-dinh/qd-01.pdf" },
    { id: 17, label: "QD 198/QĐ-BVLBP", url: "/files/quyet-dinh/qd-198.pdf" },
    { id: 18, label: "QD 305/QĐ-BVLBP", url: "/files/quyet-dinh/qd-305.pdf" },
    { id: 19, label: "QD 47/QĐ-BVLBP", url: "/files/quyet-dinh/47qd.pdf" },
    { id: 20, label: "QD 250/QĐ-BVLBP", url: "/files/quyet-dinh/qd-250.pdf" },
    { id: 21, label: "QD 310/QĐ-BVLBP", url: "/files/quyet-dinh/QĐ-310.pdf" },
    {
      id: 22,
      label: "QD 240/QĐ-BVLBP",
      url: "/files/quyet-dinh/qd-240-2016.pdf",
    },
    { id: 23, label: "QD 290/QĐ-BVLBP", url: "/files/quyet-dinh/qd-290.pdf" },
    { id: 24, label: "QD 258/QĐ-BVLBP", url: "/files/quyet-dinh/qd-258.pdf" },
    { id: 25, label: "QD 261/QĐ-BVLBP", url: "/files/quyet-dinh/qd-261.pdf" },
    { id: 26, label: "QD 229/QĐ-BVLBP", url: "/files/quyet-dinh/qd-229.pdf" },
    { id: 27, label: "QD 230/QĐ-BVLBP", url: "/files/quyet-dinh/qd-230.pdf" },
    { id: 28, label: "QD 231/QĐ-BVLBP", url: "/files/quyet-dinh/qd-231.pdf" },
    { id: 29, label: "QD 232/QĐ-BVLBP", url: "/files/quyet-dinh/232qd.pdf" },
    { id: 30, label: "QD 233/QĐ-BVLBP", url: "/files/quyet-dinh/qd-233.pdf" },
    { id: 31, label: "QD 204/QĐ-BVLBP", url: "/files/quyet-dinh/qd-204.pdf" },
    { id: 32, label: "QD 284/QĐ-BVLBP", url: "/files/quyet-dinh/284qd.pdf" },
    { id: 33, label: "QD 221/QĐ-BVLBP", url: "/files/quyet-dinh/qd-221.pdf" },
    { id: 34, label: "QD 257/QĐ-BVLBP", url: "/files/quyet-dinh/qd-257.pdf" },
    { id: 35, label: "QD 59/QĐ-BVLBP", url: "/files/quyet-dinh/qd-59.pdf" },
  ];
  const [selectedPdf, setSelectedPdf] = useState(pdfOptions[0]);
  return (
    <Layout>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r px-4 py-6 h-screen overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Danh sách PDF</h2>
          <ul>
            {pdfOptions.map((opt) => (
              <li key={opt.id} className="mb-2">
                <button
                  className={`w-full text-left px-2 py-1 rounded 
                  ${
                    selectedPdf === opt.url
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100"
                  }`}
                  onClick={() => setSelectedPdf(opt)}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 flex items-center justify-center bg-gray-50">
          <iframe
            src={selectedPdf.url}
            width="90%"
            height="90%"
            className="shadow-md border"
            title="PDF Viewer"
          />
        </div>
      </div>
    </Layout>
  );
}
