import Hero from "../components/hero";
import Footer from "../components/footer";

function Home() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div className="bg-gray-800 flex items-center justify-center">
        <h1 className="text-center font-bold text-2xl">Home Page</h1>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
