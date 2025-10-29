import Hero from "../components/hero";
import Footer from "../components/footer";

function Home() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">Product</h1>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
