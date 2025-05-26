"use client";
import React from "react";
import { Carousel } from "primereact/carousel";
const banners = [
  {
    image: "/img/carousel/1.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/1_1.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/15_1.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/20141230_125830.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/20150603_100028.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/csc_0035.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/csc_0044.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/csc_0079.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/csc_0080.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  {
    image: "/img/carousel/csc_0086.jpg",
    title: "PHẪU THUẬT ROBOT DA VINCI XI THẾ HỆ MỚI",
    desc: "Điều trị hiệu quả cao vượt trội u, bướu, bệnh K phức tạp",
    time: "20:00 • Thứ năm, 22/05/2025",
    // Các field khác nếu cần
  },
  // Thêm các banner khác nếu có
];

const bannerTemplate = (banner) => (
  <div
    style={{
      background: `url(${banner.image}) center center/cover no-repeat`,
      width: "100vw",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      position: "relative",
    }}
  >
    <div
      style={{
        color: "#fff",
        textShadow: "2px 2px 8px #000",
        padding: 32,
        width: "100%",
        maxWidth: 1600,
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#ffe100" }}>{banner.title}</h1>
      <p style={{ fontSize: "1.5rem" }}>{banner.desc}</p>
      <div style={{ fontWeight: "bold", marginTop: 12 }}>{banner.time}</div>
    </div>
  </div>
);
export default function CaptionDemo() {
  return (
    <div style={{ width: "100vw", margin: 0, padding: 0, overflow: "hidden" }}>
      <Carousel
        value={banners}
        itemTemplate={bannerTemplate}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={7000}
        showIndicators
        showNavigators
        style={{ width: "100vw" }}
      />
    </div>
  );
}
