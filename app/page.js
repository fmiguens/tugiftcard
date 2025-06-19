// app/page.js
export default function HomePage() {
  return (
    <>
      <section className="pb-20 bg-purple-50 text-center">
        {/* Hero, cómo funciona, ventajas, contacto… */}
        <div className="max-w-3xl mx-auto px-6 pt-8">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
            Gift Cards digitales para tu tienda o restaurante
          </h1>
          {/* … resto del contenido … */}
        </div>
      </section>
      {/* … demas secciones … */}
    </>
  )
}
