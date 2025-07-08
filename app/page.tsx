export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">TurkBazaar Giriş</h1>
        <p className="text-sm text-gray-600 mb-6">
          Yerli üreticiye destek, dünya pazarına erişim. <br /> TurkBazaar ile ticaret herkes için kolay.
        </p>

        <form className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              placeholder="ornek@eposta.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          Hesabın yok mu? <a href="#" className="text-green-600 hover:underline">Kayıt Ol</a>
        </p>
      </div>
    </div>
  );
}
