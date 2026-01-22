// components/WhatsAppFloatingButton.tsx
"use client";

import FloatingButton from "../components/FloatingButton";

export default function WhatsAppFloatingButton() {
  return (
    <FloatingButton
      imageSrc="/img/whatapp.png"
      alt="WhatsApp"
      onClick={() => window.open("https://wa.me/558189096332", "_blank")}
    />
  );
}
