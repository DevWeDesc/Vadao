import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <About />
        </section>
        <section>
          <FeaturedDishes />
        </section>
        <section>
          <Menu />
        </section>
      </main>
    </>
  );
}
