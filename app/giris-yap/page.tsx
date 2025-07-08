'use client'

import Link from 'next/link'

export default function GirisSayfasi() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Giriş Yap</h2>
          <p className="mt-2 text-sm text-gray-600">
            Hesabınıza giriş yapın
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input
              type="password"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Beni hatırla</span>
            </label>
            <a href="#" className="text-sm text-green-700 hover:underline">Şifremi unuttum?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition"
          >
            Giriş Yap
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Hesabınız yok mu?{' '}
          <Link href="/kayit" className="text-green-700 font-semibold hover:underline">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  )
}
