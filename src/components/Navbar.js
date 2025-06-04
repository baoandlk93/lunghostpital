"use client";
import React, { useState } from "react";
import { MegaMenu } from "primereact/megamenu";
import { useRouter } from "next/navigation";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { RiExchangeBoxFill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FaNewspaper } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();

  const items = [
    {
      label: "Trang chủ",
      icon: <FaHome className="text-gray-500 me-2" />,
      command: () => router.push("/"),
      className: "text-white",
    },
    {
      label: "Giới thiệu",
      icon: <FaInfoCircle className="text-gray-500 me-2" />,
      items: [
        [
          {
            label: "Tổ chức bệnh viện",
            items: [
              {
                label: "Cơ cấu tổ chức",
                command: () => router.push("/about/organizational-structure"),
              },
            ],
          },
        ],
        [
          {
            label: "Khoa phòng",
            items: [
              {
                label: "Khoa Lao Hô Hấp",
                command: () => router.push("/about/lao-ho-hap"),
              },
              {
                label: "Khoa Lao ngoài phổi và bệnh phổi",
                command: () => router.push("/about/laonhaophoi"),
              },
              {
                label: "Khoa Khám hồi sức cấp cứu",
                command: () => router.push("/about/khamsucrecapcuu"),
              },
              {
                label: "Khoa Dược - CLS",
                command: () => router.push("/about/duoccls"),
              },
              {
                label: "Phòng Kế hoạch tổng hợp - Chỉ đạo tuyến",
                command: () => router.push("/about/ketoanthanhnhachuyen"),
              },
              {
                label: "Phòng Điều dưỡng - Dinh dưỡng - KSNK",
                command: () => router.push("/about/dieuduong"),
              },
              {
                label: "Phòng Tổ chức hành chính",
                command: () => router.push("/about/totuchoihanachuyen"),
              },
              {
                label: "Phòng Tài chính kế toán",
                command: () => router.push("/about/taike"),
              },
            ],
          },
        ],
      ],
    },
    {
      label: "Lịch công tác",
      icon: <FaCalendar className="text-gray-500 me-2" />,
      command: () => router.push("/calendar"),
    },
    {
      label: "Tin tức",
      icon: <FaNewspaper className="text-gray-500 me-2" />,
      items: [
        [
          {
            label: "Tin tức",
            items: [
              {
                label: "Tin tức tổng hợp",
                command: () => router.push("/news/general"),
              },
              {
                label: "Tin tức bệnh viện",
                command: () => router.push("/news/hospital"),
              },
              {
                label: "Quy trình thanh toán viện phí",
                command: () => router.push("/news/fee"),
              },
            ],
          },
        ],
      ],
    },
    {
      label: " Đoàn thể",
      icon: <GrGroup className="text-gray-500 me-2" />,
      items: [
        [
          {
            label: "Đoàn thể",
            items: [
              { label: "Hoạt động công đoàn" },
              { label: "Hội nghị, hội thảo" },
              { label: "Thư viện ảnh" },
            ],
          },
        ],
      ],
    },
    {
      label: "Cải cách hành chính",
      icon: <RiExchangeBoxFill className="text-gray-500 me-2" />,
      items: [
        [
          {
            label: "Cải cách hành chính",
            items: [
              {
                label: "Hướng dẫn làm các thủ tục",
                command: () => router.push("/instruct"),
              },
            ],
          },
        ],
      ],
    },
    {
      label: "Viện phí",
      icon: <FaMoneyBill className="text-gray-500 me-2" />,
      command: () => router.push("/fee"),
    },
    {
      label: "Đặt lịch khám chữa bệnh",
      icon: <FaCalendar className="text-gray-500 me-2" />,
      command: () => router.push("/booking"),
    },
  ];
  const style = {
    "p-megamenu": {
      background: "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "#fff",
      border: "none",
    },

    /* Đổi màu text của menu items */
    "p-megamenu .p-menuitem-text": {
      color: "#fff !important",
    },

    /* Đổi màu hover */
    "p-megamenu .p-menuitem:hover": {
      background: "rgba(255, 255, 255, 0.1) !important",
    },
  };
  return (
    <div className="card">
      <MegaMenu model={items} breakpoint="960px" style={style} />
    </div>
  );
}
