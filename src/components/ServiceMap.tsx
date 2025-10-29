import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const ServiceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Cargar el script de Leaflet si no existe
    if (!document.querySelector("#leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    if (!document.querySelector("#leaflet-js")) {
      const script = document.createElement("script");
      script.id = "leaflet-js";
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      // @ts-ignore
      const L = window.L;
      if (!L) return;

      const map = L.map(mapRef.current!).setView([26.1758, -80.2873], 14);

      // Capa base de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Marcador principal
      const marker = L.marker([26.1758, -80.2873]).addTo(map);
      marker.bindPopup(`
        <b>AirConditioning Florida</b><br>
        3955 N Nob Hill Rd<br>
        Sunrise, FL 33351<br>
        <a href="https://www.openstreetmap.org/?mlat=26.1758&mlon=-80.2873#map=16/26.1758/-80.2873" target="_blank" style="color:#1d7fe3;text-decoration:underline;">
          View on OpenStreetMap
        </a>
      `).openPopup();
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at 3955 N Nob Hill Rd, Sunrise, FL 33351
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-card-hover">
            <div ref={mapRef} className="w-full h-[500px]" />
          </Card>

          <div className="grid md:grid-cols-1 gap-6 mt-8">
            <Card className="p-6 border-none shadow-card">
              <h3 className="text-2xl font-semibold mb-2">AirConditioning - Sunrise, FL</h3>
              <p className="text-muted-foreground">
                3955 N Nob Hill Rd, Sunrise, FL 33351
              </p>
              <p className="text-muted-foreground mt-2">
                Providing reliable air conditioning maintenance and installation across South Florida.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
