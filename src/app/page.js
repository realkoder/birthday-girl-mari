"use client";

import Image from "next/image";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="text-center">
      <Toaster />
      <h1 className="text-lg my-4">TILLYKKE MED DAGEN MARI</h1>

      <Image
        src="https://i.etsystatic.com/24605473/r/il/3cebc7/5187952890/il_1588xN.5187952890_8cen.jpg"
        alt="Grand danois wearing costume"
        width={800}
        height={800}
      />
    </main>
  );
}
