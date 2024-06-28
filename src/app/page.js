"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import { Toaster } from "sonner";

export default function Home() {
  

  return (
    <main className="">
      <div className="flex max-sm:w-80 flex-col text-center items-center">
        <h1 className="text-lg my-4">
          TILLYKKE MED DIN FØDSELSDAG BIRTHDAY BOI MADS
        </h1>
        <Toaster />
        <h2 className="text-lg my-4">{textContent}</h2>
      </div>     
    </main>
  );
}
