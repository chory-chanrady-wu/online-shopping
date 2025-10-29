import Hero from "../components/hero";
import Footer from "../components/footer";

function Trending() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">Trending</h1>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Trending;
