import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OLIVEMOUNT Global School",
    short_name: "OLIVEMOUNT",
    description:
      "Premium CBSE school in Attapur, Hyderabad from Pre-KG to Class XII.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f9ff",
    theme_color: "#07172a",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
