import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    initMap?: () => void;
  }
}

const ServiceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState("");
  const [tempKey, setTempKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadGoogleMapsScript = (key: string) => {
    if (scriptLoaded) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      setScriptLoaded(true);
      initializeMap();
    };

    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    try {
      // Center between Tampa and Miami
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 27.9, lng: -81.5 },
        zoom: 7,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Tampa marker
      new google.maps.Marker({
        map,
        position: { lat: 27.9506, lng: -82.4572 },
        title: "Tampa Service Area",
        label: {
          text: "Tampa",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
        },
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#1d7fe3",
          fillOpacity: 1,
          strokeColor: "white",
          strokeWeight: 2,
        },
      });

      // Miami marker
      new google.maps.Marker({
        map,
        position: { lat: 25.7617, lng: -80.1918 },
        title: "Miami Service Area",
        label: {
          text: "Miami",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
        },
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#1d7fe3",
          fillOpacity: 1,
          strokeColor: "white",
          strokeWeight: 2,
        },
      });

      setMapLoaded(true);
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  useEffect(() => {
    if (apiKey && !scriptLoaded) {
      loadGoogleMapsScript(apiKey);
    } else if (apiKey && scriptLoaded) {
      initializeMap();
    }
  }, [apiKey, scriptLoaded]);

  const handleSetApiKey = () => {
    if (tempKey.trim()) {
      setApiKey(tempKey.trim());
    }
  };

  if (!mapLoaded) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve Tampa and Miami, Florida
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 border-none shadow-card">
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">Add Google Maps</h3>
                <p className="text-muted-foreground">
                  Enter your Google Maps API key to display the service area map
                </p>
                <a
                  href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent text-sm underline"
                >
                  Get your free API key here
                </a>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiKey">Google Maps API Key</Label>
                <Input
                  id="apiKey"
                  type="text"
                  placeholder="Enter your Google Maps API key"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSetApiKey();
                    }
                  }}
                />
              </div>

              <Button
                onClick={handleSetApiKey}
                className="w-full bg-primary text-primary-foreground hover:bg-accent"
              >
                Load Map
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We proudly serve Tampa and Miami, Florida
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-card-hover">
            <div ref={mapRef} className="w-full h-[500px]" />
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 border-none shadow-card">
              <h3 className="text-2xl font-semibold mb-2">Tampa</h3>
              <p className="text-muted-foreground">
                Serving the greater Tampa Bay area with fast, reliable AC services for residential and industrial clients.
              </p>
            </Card>
            <Card className="p-6 border-none shadow-card">
              <h3 className="text-2xl font-semibold mb-2">Miami</h3>
              <p className="text-muted-foreground">
                Providing top-quality air conditioning solutions throughout Miami and surrounding communities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
