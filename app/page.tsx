'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AnaSayfa() {
  const [lang, setLang] = useState("TR");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ÜST ŞERİT */}
      <header className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="TurkBazaar Logosu" width={40} height={40} />
          <span className="text-xl font-bold">TurkBazaar</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/giris-yap" className="hover:underline">
            Giriş Yap
          </Link>
          <Link href="/kayit-ol" className="hover:underline">
            Kayıt Ol
          </Link>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white text-green-700 rounded px-2 py-1"
          >
            <option value="TR">🇹🇷 Türkçe</option>
            <option value="EN">🇬🇧 English</option>
            <option value="AR">🇸🇦 عربي</option>
            <option value="DE">🇩🇪 Deutsch</option>
            <option value="ZH">🇨🇳 中文</option>
            <option value="JA">🇯🇵 日本語</option>
          </select>
          <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-100">
            💬 Canlı Destek
          </button>
        </div>
      </header>

      {/* ARAMA ve KATEGORİLER */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">TurkBazaar&apos;a Hoş Geldiniz</h1>
          <p className="text-gray-600 mb-6">
            Türkiye&apos;nin yerli satıcılarını dünya ile buluşturan ticaret platformu.
          </p>

          {/* ARAMA ÇUBUĞU */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Ürün veya kategori ara..."
              className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-l-md text-black"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">
              Ara
            </button>
          </div>

          {/* KATEGORİLER */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {[
              "Ambalaj ve Baskı",
              "Taşımacılık",
              "Işıklar ve Aydınlatma",
              "Sanat ve El Sanatları",
              "Oyuncaklar",
              "Giyim ve Aksesuar",
              "Tüketici Elektroniği",
              "Günlük Kullanım Ürünleri",
              "Gıda ve Tarım",
              "Mobilya",
              "Ev Gereçleri",
              "Yapı ve İnşaat"
            ].map((kategori, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-green-600 text-2xl mb-2">📦</div>
                <p className="font-medium">{kategori}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
