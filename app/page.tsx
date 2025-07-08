'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/logo.png" alt="TurkBazaar Logosu" className="w-24 h-24 mb-4" />
      <h1 className="text-3xl font-bold mb-2">TurkBazaar’a Hoş Geldiniz</h1>
      <p className="text-center text-gray-600 mb-6 md:mb-6">
        Türkiye&apos;nin yerli üreticilerine destek, dünya pazarına erişim.  
        <br />
        Yurt içi ve yurt dışı toptan ticaretin yeni adresi: <strong>TurkBazaar</strong>.
      </p>
      <Link href="/giris-yap">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Giriş Yap
        </button>
      </Link>
    </section>
  );
}
