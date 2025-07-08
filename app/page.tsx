'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      {/* ÜST MENÜ */}
      <header className="bg-green-700 text-white px-4 py-3 flex flex-wrap justify-between items-center shadow">
        {/* Sol: Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="TurkBazaar Logo" width={40} height={40} />
          <span className="text-xl font-bold">TurkBazaar</span>
        </div>

        {/* Orta: Arama + Kategoriler */}
        <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="px-3 py-1 rounded text-black"
          />
          <select className="px-2 py-1 rounded text-black">
            <option>Kategoriler</option>
            <option>Gıda</option>
            <option>Tekstil</option>
            <option>Elektronik</option>
            <option>Mobilya</option>
            <option>Kozmetik</option>
            <option>İnşaat</option>
            <option>Yedek Parça</option>
          </select>
        </div>

        {/* Sağ: Dil Seçimi + Giriş/Kayıt */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <select className="px-2 py-1 rounded text-black">
            <option>TR</option>
            <option>EN</option>
          </select>

          <Link href="/giris-yap">
            <button className="bg-white text-green-700 hover:bg-green-100 px-3 py-1 rounded">
              Giriş Yap
            </button>
          </Link>
          <Link href="/kayit-ol">
            <button className="bg-white text-green-700 hover:bg-green-100 px-3 py-1 rounded">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Yerli Satıcılara Destek, Tüm Dünyaya Erişim
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          TurkBazaar, Türkiye’nin dört bir yanındaki yerli satıcılarla alıcıları buluşturan dijital pazaryeridir. Yurt içi ve yurt dışı satışları aynı platformda kolayca yönet.
        </p>
      </section>

      {/* Kategoriler */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-20">
        {[
          'Gıda',
          'Tekstil',
          'Ev Ürünleri',
          'Elektronik',
          'Mobilya',
          'Kozmetik',
          'Yapı & İnşaat',
          'Oto Yedek Parça',
          'Züccaciye'
        ].map((kategori) => (
          <div key={kategori} className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">{kategori}</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              İncele
            </button>
          </div>
        ))}
      </section>

      {/* Canlı Destek */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700">
          💬 Canlı Destek
        </button>
      </div>

    </div>
  )
}
