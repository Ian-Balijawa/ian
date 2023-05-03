import "./index.css";

import { StrictMode, Suspense, lazy } from "react";

import Footer from "@/components/Footer";
import { createRoot } from "react-dom/client";
import { Loader } from "./components/Loader";
import App from "./App";

const Loadable = (Component: any) => () => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

// const App = Loadable(lazy(() => import("@/App")));

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
