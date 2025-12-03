import React from "react";

export default function Home() {
  const menu = [
    { name: "Flat White", price: "£3.40", img: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=600" },
    { name: "Vanilla Cold Brew", price: "£3.80", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600" },
    { name: "Spiced Mocha", price: "£4.10", img: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=600" },
  ];

  return (
    <main className="bg-amber-50 min-h-screen text-neutral-900 font-sans">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-5xl font-bold tracking-tight">
          Hearth & Bean Coffee
        </h1>
      </section>

      {/* Menu grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Signature Drinks</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {menu.map((item, i) => (
            <div key={i} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
              <img src={item.img} className="h-52 w-full object-cover" />
              <div className="p-4 flex justify-between items-center">
                <span className="font-semibold">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="max-w-6xl mx-auto px-6 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <img 
          src="https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1200"
          className="rounded-2xl shadow-md object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-neutral-700 leading-relaxed">
            We began as a weekend market stall and now have a cosy cafe and micro roastery.
            Our beans are roasted in small batches and dialled in daily for the perfect cup.
          </p>
        </div>
      </section>

      {/* Visit section */}
      <section className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p>14 Market Street, Skelmersdale, WN8 8DU</p>
            <p className="mt-2">📞 +44 7857 480130</p>
            <p className="mt-1">📧 hello@hearthbean.co.uk</p>
          </div>
          <img 
            className="rounded-2xl shadow-md object-cover"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-neutral-600 text-sm border-t">
        © {new Date().getFullYear()} Hearth & Bean Coffee Co. All rights reserved.
      </footer>

    </main>
  );
}
