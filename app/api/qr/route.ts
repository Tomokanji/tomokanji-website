import QRCode from "qrcode";

// Update this URL when the App Store link changes
const APP_STORE_URL = "https://apps.apple.com/app/tomokanji/id000000000";

// Pre-render at build time — no runtime generation cost
export const dynamic = "force-static";

export async function GET() {
  const svg = await QRCode.toString(APP_STORE_URL, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#000000",
      light: "#00000000", // transparent background
    },
  });

  // Add rounded corners to each module rect (rx/ry as a fraction of module size)
  const rounded = svg.replace(/<rect /g, '<rect rx="0.4" ry="0.4" ');

  return new Response(rounded, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
