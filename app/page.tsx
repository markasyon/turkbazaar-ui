import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo ve Başlık */}
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/logo.png"
          alt="TurkBazaar Logo"
          width={100}
          height={100}
          className="mb-2"
        />
        <h1 className="text-3xl font-bold text-gray-800">TurkBazaar Giriş</h1>
      </div>

      {/* Açıklama */}
      <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
        🇹🇷 Yerli üreticiye destek, dünya pazarına erişim. <br />
        Yurt içi ve yurt dışı toptan ticaretin yeni adresi: <strong>TurkBazaar</strong>
      </p>

      {/* Giriş Formu */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              placeholder="ornek@eposta.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Beni Hatırla
            </label>
            <a href="#" className="text-sm text-green-600 hover:underline">Şifremi Unuttum?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Hesabın yok mu? <a href="#" className="text-green-600 hover:underline">Kayıt Ol</a>
        </p>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6">© 2025 TurkBazaar. Tüm hakları saklıdır.</p>
    </div>
  );
}
