// pages/index.js

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* HEADER: solo el logo, sin texto */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img
            src="/logo-tugiftcard.png"
            alt="TuGiftCard"
            width="120"
            height="40"
          />
          {/* Si querés navegación, re-habilitala aquí */}
        </div>
      </header>

      {/* HERO */}
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

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">Cómo funciona</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div>
            <img
              src="https://img.icons8.com/ios-filled/100/8b5cf6/gift-card.png"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Configurá tu marca</h3>
            <p className="text-sm text-gray-600">
              Subí tu logo, definí los valores y elegí el diseño.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/100/8b5cf6/shopping-cart.png"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Tus clientes compran</h3>
            <p className="text-sm text-gray-600">
              Recibí pagos online con Stripe.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/ios-filled/100/8b5cf6/approval.png"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Enviás la gift card</h3>
            <p className="text-sm text-gray-600">
              El cliente recibe la tarjeta personalizada por correo.
            </p>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section id="ventajas" className="py-20 bg-gray-50 text-center">
        <h2 classNam
