'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GirisYapPage() {
  const [lang, setLang] = useState("TR");

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
          <Link href="/" className="hover:underline">
            Ana Sayfa
          </Link>

          {/* Dil Seçimi */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white text-green-700 rounded px-2 py-1"
          >
            <option value="TR">🇹🇷 Türkçe</option>
            <option value="EN">🇬🇧 English</option>
          </select>

          {/* Canlı Destek */}
          <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-100">
            💬 Canlı Destek
          </button>
        </div>
      </header>

      {/* GİRİŞ KUTUSU */}
      <main className="flex justify-center items-center mt-
