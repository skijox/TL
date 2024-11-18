import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, Certificates, Testimonials, Blog } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* Define the main portfolio route */}
          <Route
            path="/"
            element={
              
              <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>                
                  <Navbar/>
                  <Hero />
                </div>
                <About />
                <Experience />
                <Certificates />
                <Education />
                <Tech />
                <Works />
                <div className='relative z-0'>
	                <Contact />
	                <StarsCanvas />
	               </div>
              </div>
            }
          />

          {/* Define the blog route */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
