// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="TurkBazaar Logo" className="w-16 h-16 mb-2" />
          <h1 className="text-xl font-bold">TurkBazaar Giriş</h1>
          <p className="text-sm text-gray-600 text-center mt-2">
            🇹🇷 Yerli üreticiye destek, dünya pazarına erişim.<br />
            Yurt içi ve yurt dışı toptan ticaretin yeni adresi: <strong>TurkBazaar</strong>
          </p>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="E-posta" className="w-full p-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Şifre" className="w-full p-2 border border-gray-300 rounded" />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Beni Hatırla
            </label>
            <a href="#" className="text-blue-600">Şifremi Unuttum?</a>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Giriş Yap
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Hesabın yok mu? <a href="#" className="text-blue-600">Kayıt Ol</a>
        </p>
        <p className="text-center text-xs text-gray-400 mt-6">© 2025 TurkBazaar. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}