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
              { label: "Cơ cấu tổ chức", command: () => router.push("/about") },
            ],
          },
        ],
        [
          {
            label: "Khoa phòng",
            items: [
              {
                label: "Khoa Lao Hô Hấp",
                command: () => router.push("/about"),
              },
              {
                label: "Khoa Lao ngoài phổi và bệnh phổi",
                command: () => router.push("/about"),
              },
              {
                label: "Khoa Khám hồi sức cấp cứu",
                command: () => router.push("/about"),
              },
              {
                label: "Khoa Dược - CLS",
                command: () => router.push("/about"),
              },
              {
                label: "Phòng Kế hoạch tổng hợp - Chỉ đạo tuyến",
                command: () => router.push("/about"),
              },
              {
                label: "Phòng Điều dưỡng - Dinh dưỡng - KSNK",
                command: () => router.push("/about"),
              },
              {
                label: "Phòng Tổ chức hành chính",
                command: () => router.push("/about"),
              },
              {
                label: "Phòng Tài chính kế toán",
                command: () => router.push("/about"),
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
            label: "Football",
            items: [
              { label: "Kits" },
              { label: "Shoes" },
              { label: "Shorts" },
              { label: "Training" },
            ],
          },
        ],
        [
          {
            label: "Running",
            items: [
              { label: "Accessories" },
              { label: "Shoes" },
              { label: "T-Shirts" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Swimming",
            items: [
              { label: "Kickboard" },
              { label: "Nose Clip" },
              { label: "Swimsuits" },
              { label: "Paddles" },
            ],
          },
        ],
        [
          {
            label: "Tennis",
            items: [
              { label: "Balls" },
              { label: "Rackets" },
              { label: "Shoes" },
              { label: "Training" },
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
            label: "Football",
            items: [
              { label: "Kits" },
              { label: "Shoes" },
              { label: "Shorts" },
              { label: "Training" },
            ],
          },
        ],
        [
          {
            label: "Running",
            items: [
              { label: "Accessories" },
              { label: "Shoes" },
              { label: "T-Shirts" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Swimming",
            items: [
              { label: "Kickboard" },
              { label: "Nose Clip" },
              { label: "Swimsuits" },
              { label: "Paddles" },
            ],
          },
        ],
        [
          {
            label: "Tennis",
            items: [
              { label: "Balls" },
              { label: "Rackets" },
              { label: "Shoes" },
              { label: "Training" },
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
            label: "Football",
            items: [
              { label: "Kits" },
              { label: "Shoes" },
              { label: "Shorts" },
              { label: "Training" },
            ],
          },
        ],
        [
          {
            label: "Running",
            items: [
              { label: "Accessories" },
              { label: "Shoes" },
              { label: "T-Shirts" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Swimming",
            items: [
              { label: "Kickboard" },
              { label: "Nose Clip" },
              { label: "Swimsuits" },
              { label: "Paddles" },
            ],
          },
        ],
        [
          {
            label: "Tennis",
            items: [
              { label: "Balls" },
              { label: "Rackets" },
              { label: "Shoes" },
              { label: "Training" },
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

  return (
    <div className="card">
      <MegaMenu
        model={items}
        breakpoint="960px"
        style={{ width: "100%", backgroundColor: "#blue" }}
      />
    </div>
  );
}
