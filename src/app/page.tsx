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
      <div className="hidden lg:flex w-screen h-screen items-center justify-center">
        <p className="font-extraBlack text-7xl max-w-xxl text-center">
          Não disponível para desktop até o Momento...
        </p>
      </div>
      <Header />
      <main className="lg:hidden">
        <section id="Init">
          <Banner />
        </section>
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
