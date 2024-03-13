"use client"
import GenerateButton from "@/components/GenerateButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [excuse, setExcuse] = useState<[]>([]);

  useEffect(() => {
    const fetchRandomExcuse = async () => {
      const response = await fetch('/api/excuse');
      const data = await response.json();
      console.log(data);

      setExcuse(data);
    }

    fetchRandomExcuse();
  }, [])

  return (
    <main className="mx-10 min-h-screen flex flex-col">
      <h1 className="font-extrabold text-3xl mt-4">
        LES EXCUSES DE DEV
      </h1>
      <div className="m-auto">
        Excuse ici
        {excuse}
      </div>
      <div className="text-center">
        <GenerateButton content="Générer une nouvelle excuse" />
      </div>
    </main>
  );
}
