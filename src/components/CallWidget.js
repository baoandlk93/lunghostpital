"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa6";
const phoneNumber = "0965351515"; // Không dấu chấm
const zaloLink = "https://zalo.me/0965351515"; // Thay bằng link zalo phù hợp
const messengerLink = "https://m.me/yourpageid"; // Thay bằng link messenger page bạn

// CSS in JS hoặc import file css riêng nếu muốn
const widgetStyle = {
  position: "fixed",
  right: 24,
  bottom: 100,
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const pulseStyle = {
  background: "#1976d2",
  borderRadius: "50%",
  width: 64,
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 15px 2px #1976d288",
  cursor: "pointer",
  animation: "ring 1.2s infinite",
  border: "none",
  outline: "none",
};

const iconStyle = {
  color: "#fff",
  fontSize: 32,
};

const socialButtonStyle = (bg) => ({
  background: bg,
  border: "none",
  borderRadius: 16,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  fontWeight: 500,
  fontSize: 16,
  cursor: "pointer",
  gap: 8,
  boxShadow: "0 1px 4px #0001",
});

export default function CallWidget() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (!document.getElementById("ring-keyframes")) {
        const style = document.createElement("style");
        style.id = "ring-keyframes";
        document.head.appendChild(style);
      }
    }
  }, []);
  return (
    <div style={widgetStyle}>
      {/* Nút gọi điện */}
      <a href={`tel:${phoneNumber}`} style={pulseStyle} title="Hotline">
        <FaPhone />
      </a>
      {/* Nút Zalo */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        style={socialButtonStyle("#039be5")}
      >
        <SiZalo />
        Zalo
      </a>
      {/* Nút Messenger */}
      <a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        style={socialButtonStyle("#006AFF")}
      >
        <FaFacebookMessenger /> Messenger
      </a>
    </div>
  );
}
