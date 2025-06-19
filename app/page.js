// app/page.js
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pb-20 bg-purple-50 text-center">
        <div className="max-w-3xl mx-auto px-6 pt-8">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
            Gift Cards digitales para tu tienda o restaurante
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Tu sistema en minutos, sin complicaciones y conectado a Stripe.
          </p>
          <a
            href="#contacto"
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-purple-700"
          >
            Solicitá tu demo gratuita
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-20 bg-white text-center">
        {/* ... */}
      </section>

      {/* VENTAJAS */}
      <section id="ventajas" className="py-20 bg-gray-50 text-center">
        {/* ... */}
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-purple-600 text-white text-center">
        {/* ... */}
      </section>
    </>
  );
}
