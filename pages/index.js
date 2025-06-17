export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo-tugiftcard.png" alt="TuGiftCard" className="h-8" />
            <span className="text-xl font-extrabold text-purple-600">TuGiftCard</span>
          </div>
          <nav className="space-x-6 text-sm font-semibold hidden sm:block">
            <a href="#como-funciona" className="text-gray-600 hover:text-purple-600">Cómo funciona</a>
            <a href="#ventajas" className="text-gray-600 hover:text-purple-600">Ventajas</a>
            <a href="#contacto" className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700">Solicitá tu demo</a>
          </nav>
        </div>
      </header>
      <section className="pt-28 pb-20 bg-purple-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Gift Cards digitales para tu tienda o restaurante</h1>
          <p className="text-lg text-gray-700 mb-8">Tu sistema en minutos, sin complicaciones y conectado a Stripe.</p>
          <a href="#contacto" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-purple-700">Solicitá tu demo gratuita</a>
        </div>
      </section>
      <section id="como-funciona" className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">Cómo funciona</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div>
            <img src="https://img.icons8.com/ios-filled/100/8b5cf6/gift-card.png" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Configurá tu marca</h3>
            <p className="text-sm text-gray-600">Subí tu logo, definí los valores y elegí el diseño.</p>
          </div>
          <div>
            <img src="https://img.icons8.com/ios-filled/100/8b5cf6/shopping-cart.png" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tus clientes compran</h3>
            <p className="text-sm text-gray-600">Recibí pagos online con Stripe.</p>
          </div>
          <div>
            <img src="https://img.icons8.com/ios-filled/100/8b5cf6/approval.png" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Enviás la gift card</h3>
            <p className="text-sm text-gray-600">El cliente recibe la tarjeta personalizada por correo.</p>
          </div>
        </div>
      </section>
      <section id="ventajas" className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">¿Por qué usar TuGiftCard?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 text-left">
          <div>
            <h3 className="text-lg font-semibold text-purple-600">100% personalizado</h3>
            <p className="text-sm text-gray-600 mb-4">Usá tu imagen de marca, colores y mensajes propios.</p>
            <h3 className="text-lg font-semibold text-purple-600">Fácil de integrar</h3>
            <p className="text-sm text-gray-600">Agregalo a tu web o redes sociales.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-600">Pagos seguros</h3>
            <p className="text-sm text-gray-600 mb-4">Cobrales a tus clientes con Stripe.</p>
            <h3 className="text-lg font-semibold text-purple-600">Soporte incluido</h3>
            <p className="text-sm text-gray-600">Te acompañamos desde el inicio.</p>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-20 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Empezá hoy mismo</h2>
          <p className="mb-8 text-sm">Dejanos tus datos y te ayudamos a activar tu sistema.</p>
          <a href="mailto:hola@tugiftcard.es" className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 inline-block">Escribinos</a>
        </div>
      </section>
      <footer className="text-center text-xs py-4 text-gray-400">&copy; 2025 TuGiftCard</footer>
    </main>
  );
}