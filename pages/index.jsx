import React from "react";

function CoffeeShopSite() {
  const shop = {
    name: "Hearth & Bean Coffee Co.",
    tagline: "Small batch coffee, fresh pastries, warm community",
    phone: "+44 7857 480130",
    email: "hello@hearthbean.co.uk",
    address: "14 Market Street, Skelmersdale, WN8 8DU",
  };

  return (
    <main style={{ fontFamily: "sans-serif", padding: "20px", background: "#fff8e6" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", margin: 0 }}>{shop.name}</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>{shop.tagline}</p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2>Signature Drinks</h2>
        <ul>
          <li>Flat White – £3.40</li>
          <li>Vanilla Cold Brew – £3.80</li>
          <li>Spiced Mocha – £4.10</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Pastries</h2>
        <ul>
          <li>Butter Croissant – £2.30</li>
          <li>Brownie – £2.90</li>
          <li>Cinnamon Bun – £2.80</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>About Us</h2>
        <p>
          We began as a weekend market stall and now have a cosy cafe and
          micro-roastery. Our beans are small batch roasted and dialled in daily.
        </p>
      </section>

      <section>
        <h2>Visit Us</h2>
        <p>{shop.address}</p>
        <p>Phone: {shop.phone}</p>
        <p>Email: {shop.email}</p>
      </section>
    </main>
  );
}

export default function Home() {
  return <CoffeeShopSite />;
}


