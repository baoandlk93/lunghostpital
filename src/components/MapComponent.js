"use client";
import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const loadMap = () => {
      const center = { lat: 21.028511, lng: 105.804817 }; // Tọa độ Hà Nội, đổi nếu cần
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: center,
      });
      new window.google.maps.Marker({
        position: center,
        map: map,
        title: "Địa chỉ công ty",
      });
    };

    // Chỉ nạp lại script nếu chưa có
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = loadMap;
      document.body.appendChild(script);
      return;
    }

    loadMap();
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;
