import React from "react";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";

import swim from "./assets/swim.svg";
import fitness from "./assets/fitness.svg";
import bike from "./assets/bike.svg";
import yoga from "./assets/yoga.svg";


const aside_links = [
  {
    logo: yoga,
    href: "/",
    alt: "yoga",
  },
  {
    logo: swim,
    href: "/",
    alt: "swim",
  },
  {
    logo: bike,
    href: "/",
    alt: "bike",
  },
  {
    logo: fitness,
    href: "/",
    alt: "fitness",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Aside aside_links={aside_links} />
    </div>
  )
}
