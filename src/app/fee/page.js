"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
const pdfOptions = [
  { label: "Quyết định", url: "/files/quyet-dinh-gia.pdf" },
  { label: "Bảng giá", url: "/files/gia.pdf" },
];
export default function FeePage() {
  const [selectedPdf, setSelectedPdf] = useState(pdfOptions[0]);
  return (
    <Layout>
      <BreadCrumb
        model={[{ label: "Trang chủ", url: "/" }, { label: "Bảng giá" }]}
      />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-48 bg-gray-100 border-r px-4 py-6">
          <h2 className="text-lg font-bold mb-4">Danh sách PDF</h2>
          <ul>
            {pdfOptions.map((opt) => (
              <li key={opt.url} className="mb-2">
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
