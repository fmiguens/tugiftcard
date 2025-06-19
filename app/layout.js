// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'TuGiftCard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans bg-white text-gray-800">
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
            <img src="/logo-tugiftcard.png" alt="TuGiftCard" width="120" height="40" />
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
