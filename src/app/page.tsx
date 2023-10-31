import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Feedbacks } from "@/components/Feedbacks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

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
        <section>
          <Feedbacks />
        </section>
        <Footer />
      </main>
    </>
  );
}
