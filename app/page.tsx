// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/logo.png" alt="TurkBazaar Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-3xl font-bold mb-2">TurkBazaar'a Hoş Geldiniz</h1>
      <p className="text-center text-gray-600 max-w-md mb-6">
        Türkiye'nin yerli üreticilerini dünyayla buluşturan toptan ticaret platformu.
        Ürünleri keşfetmeye başlamadan önce hesabınıza giriş yapın.
      </p>
      <Link href="/login">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Giriş Yap
        </button>
      </Link>
    </div>
  );
}
