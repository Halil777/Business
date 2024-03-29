import React, { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingComponent from "../components/loading/LoadingComponent";
// import MusicPlayer from "../components/musicPlayer/MusicPlayer";

// Import lazy-loaded components
const Sidebar = React.lazy(() => import("../components/sidebar/Sidebar"));
const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const Portfolio = React.lazy(() => import("../pages/portfolio/Portfolio"));
const Services = React.lazy(() => import("../pages/services/Services"));

const RouteList: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingComponent />
                </div>
              }
            >
              <Sidebar />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <Services />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      {/* <MusicPlayer /> */}
    </BrowserRouter>
  );
};

export default RouteList;
