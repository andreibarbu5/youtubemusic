import Artists from "./components/Artists";
import Footer from "./components/Footer";
import Jazz from "./components/Jazz";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="bg-black ">
      {/* Navbar */}
      <Navbar />
      {/* Jazz */}
      <Jazz />
      {/* Trending */}
      <Trending />
      {/* Artists */}
      <Artists />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
