import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-7xl font-extraBlack text-beigeDefault opacity-30">
          Sabor Inigualável
        </h1>
      </main>
    </>
  );
}
