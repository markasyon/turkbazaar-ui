'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [lang, setLang] = useState("TR")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ÜST ŞERİT */}
      <header className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="TurkBazaar Logo" width={40} height={40} />
          <span className="text-xl font-bold">TurkBazaar</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Ana Sayfa */}
          <Link href="/" className="hover:underline">Ana Sayfa</Link>

          {/* Dil Seçimi */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white text-green-700 rounded px-2 py-1"
          >
            <option value="TR">🇹🇷 Türkçe</option>
            <option value="EN">🇬🇧 English</option>
            <option value="AR">🇸🇦 العربية</option>
            <option value="ZH">🇨🇳 中文</option>
            <option value="JA">🇯🇵 日本語</option>
            <option value="DE">🇩🇪 Deutsch</option>
          </select>

          {/* Canlı Destek */}
          <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-100">💬 Canlı Destek</button>
        </div>
      </header>

      {/* VİTRİN */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Başlık ve Arama */}
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold mb-4">Türkiye'nin Yerli Satıcılarına Özel Toptan Ticaret Platformu</h1>
          <p className="text-gray-600 mb-6">TurkBazaar ile yerli satıcılarınızı dünyaya açın. Toptan satış, hızlı müzakere ve güvenli ticaret bir arada!</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Ürün veya kategori ara..."
              className="w-full max-w-xl px-4 py-2 border rounded-full shadow-sm bg-white text-black"
            />
          </div>
        </div>

        {/* KATEGORİLER */}
        <div>
          <h2 className="text-xl font-bold mb-4">Tüm Kategoriler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              ["Ambalaj ve Baskı", "📦"],
              ["Taşımacılık", "🚚"],
              ["Işıklar ve Aydınlatma", "💡"],
              ["Sanat ve El Sanatları", "💎"],
              ["Oyuncaklar", "🧸"],
              ["Giyim ve Aksesuar", "👗"],
              ["Tüketici Elektroniği", "📱"],
              ["Sanayi ve Günlük Ürünler", "🍳"],
              ["Ev ve Yaşam", "🏠"],
              ["Bahçe ve Tarım", "🌱"],
              ["Yapı Malzemeleri", "🧱"],
              ["Ofis ve Eğitim", "📚"]
            ].map(([title, icon], i) => (
              <div key={i} className="bg-white rounded-lg shadow text-center p-4">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-medium">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Giriş & Kayıt */}
        <div className="flex justify-center gap-6 mt-12">
          <Link href="/giris-yap">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Giriş Yap
            </button>
          </Link>
          <Link href="/kayit-ol">
            <button className="bg-green-100 text-green-700 px-6 py-2 rounded border hover:bg-green-200">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
