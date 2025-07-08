'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="TurkBazaar Logo" width={40} height={40} />
          <span className="text-xl font-bold text-green-700">TurkBazaar</span>
        </div>

        {/* Giriş ve Kayıt Ol Butonları */}
        <div className="space-x-3">
          <Link href="/giris-yap">
            <button className="bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded transition">
              Giriş Yap
            </button>
          </Link>
          <Link href="/kayit-ol">
            <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded transition">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Yerli Üreticiye Destek, Tüm Dünyaya Erişim</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          TurkBazaar ile Türkiye’den dünyaya açıl. Toptan ticaretin güvenli ve hızlı yolu burada.
        </p>
      </section>

      {/* Kategoriler */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {['Gıda', 'Tekstil', 'Ev Ürünleri'].map((kategori) => (
          <div key={kategori} className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">{kategori}</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              İncele
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
