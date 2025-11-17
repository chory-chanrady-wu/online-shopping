import Hero from "../components/hero";
import Footer from "../components/footer";

function Home() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div className="bg-gray-800 flex items-center justify-center">
        <p className="text-white text-center">
          Welcome to the home page! This is a simple example of a React
          component that displays a hero section and a footer.
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
