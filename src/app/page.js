"use client";

import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="">
      <div className="flex max-sm:w-80 flex-col text-center items-center">
        <h1 className="text-lg my-4">TILLYKKE MED DAGEN MARI</h1>        
        <Toaster />
      </div>
    </main>
  );
}
