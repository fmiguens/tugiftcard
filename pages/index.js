// pages/index.js
export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Solo el logo */}
          <img
            src="/logo-tugiftcard.png"
            alt="TuGiftCard"
            width="120"
            height="40"
          />
          {/* Navegación */}
          <nav className="space-x-6 text-sm font-semibold hidden sm:flex">
            <a href="#como-funciona" className="text-gray-600 hover:text-purple-600">
              Cómo funciona
            </a>
            <a href="#ventajas" className="text-gray-600 hover:text-purple-600">
              Ventajas
            </a>
            <a
              href="#contacto"
              className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700"
            >
              Solicitá tu demo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 bg-purple-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
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

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">Cómo funciona</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* ... tus íconos y textos ... */}
        </div>
      </section>

      {/* Ventajas */}
      <section id="ventajas" className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">¿Por qué usar TuGiftCard?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 text-left">
          {/* ... tu contenido ... */}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Empezá hoy mismo</h2>
          <p className="mb-8 text-sm">
            Dejanos tus datos y te ayudamos a activar tu sistema.
          </p>
          <a
            href="mailto:hola@tugiftcard.es"
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 inline-block"
          >
            Escribinos
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs py-4 text-gray-400">
        &copy; 2025 TuGiftCard
      </footer>
    </main>
  );
}
