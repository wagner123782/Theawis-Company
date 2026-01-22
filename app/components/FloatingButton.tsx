"use client";

import Image from "next/image";

type FloatingButtonProps = {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
};

export default function FloatingButton({
  imageSrc,
  alt = "Botão flutuante",
  onClick,
}: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-25 h-25  shadow-lg overflow-hidden hover:scale-105 transition "
      aria-label={alt}
    >
      <Image src={imageSrc} alt={alt} fill className="object-cover" priority />
    </button>
  );
}
