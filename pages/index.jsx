import React from "react";

export default function Home() {
  const shop = {
    name: "Hearth & Bean Coffee Co.",
    tagline: "Small batch coffee, fresh pastries, warm community",
    phone: "+44 7857 480130",
    email: "hello@hearthbean.co.uk",
    address: "14 Market Street, Skelmersdale, WN8 8DU",
  };

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff8e6",
      color: "#2a2a2a",
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px"
    }}>
      
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>{shop.name}</h1>
        <p style={{ fontSize: "20px", color: "#555" }}>{shop.tagline}</p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Signature Drinks</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}>
          {[
            { title: "Flat White", price: "£3.40", img: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=600" },
            { title: "Vanilla Cold Brew", price: "£3.80", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600" },
            { title: "Spiced Mocha", price: "£4.10", img: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=600" }
          ].map((item, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #ddd"
            }}>
              <img src={item.img} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "12px" }}>
                <h3 style={{ margin: "0 0 5px" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#444" }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About Us</h2>
        <p style={{ lineHeight: "1.6", color: "#444" }}>
          We began as a weekend market stall and now have a cosy cafe and micro-roastery.
          Our beans are roasted in small batches and dialled in daily for the perfect cup.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Visit Us</h2>
        <div style={{ background: "white", padding: "15px", borderRadius: "10px", border: "1px solid #ddd" }}>
          <p><strong>Address:</strong> {shop.address}</p>
          <p><strong>Phone:</strong> {shop.phone}</p>
          <p><strong>Email:</strong> {shop.email}</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "14px", color: "#777" }}>
        © {new Date().getFullYear()} {shop.name}. All rights reserved.
      </footer>
    </main>
  );
}



