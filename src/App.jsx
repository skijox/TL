import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, Certificates, Testimonials, Blog } from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-3d">
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* Main route */}
          <Route
            path="/"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Certificates />
                <Education />
                <Testimonials />
                <Tech />
                <Works />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            }
          />
          {/* Blog route */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
