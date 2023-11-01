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
      <div className="lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Header />
        </div>
        <div />
      </div>
      <main className="lg:grid lg:grid-cols-3">
        <section id="Init" className="lg:col-span-2">
          <Banner />
        </section>
        <div />
        <section id="About">
          <About />
        </section>
        <section id="Feature">
          <FeaturedDishes />
        </section>
        <section id="Menu">
          <Menu />
        </section>
        <section id="Feedback">
          <Feedbacks />
        </section>
        <section id="Contact">
          <Footer />
        </section>
      </main>
    </>
  );
}
