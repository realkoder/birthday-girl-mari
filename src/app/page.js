"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import DifferentImages from "@/components/ImageComps/DifferentImages";
import FlagImages from "@/components/ImageComps/FlagImages";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function Home() {
  const handHoldFlagUrl =
    "https://fest4all.dk/cdn/shop/products/1050-00010_79304686_26443501-481b-4ab8-a58e-5527cfefa52e.jpg?v=1578583169";
  const classicFlagUrl =
    "https://kija-design.dk/images/foedselsdagsflag-kageflag-dannebrogflag-dansk-flag-ss797416_1-t.webp";

  const [flagUrl, setFlagUrl] = useState(handHoldFlagUrl);  

  useEffect(() => {
    const interval = setInterval(() => {
      setFlagUrl((cur) =>
        cur === handHoldFlagUrl ? classicFlagUrl : handHoldFlagUrl
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="text-center">
      <h1 className="text-3xl my-4">FØDSELSDAG</h1>
      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>

        <div className="flex flex-col items-center m-4">
          <Toaster />
          <h1 className="text-lg my-4">TILLYKKE MED DAGEN MARI! 🇩🇰 </h1>
          <DialogBox />          
        </div>

        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>
      </div>

      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>

    </main>
  );
}
