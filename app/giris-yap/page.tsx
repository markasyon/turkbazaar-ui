export default function GirisYap() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Giriş Yap</h1>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <label className="block mb-2 font-medium">E-posta</label>
        <input
          type="email"
          placeholder="ornek@eposta.com"
          className="border border-gray-300 rounded w-full p-2 mb-4"
        />
        <label className="block mb-2 font-medium">Şifre</label>
        <input
          type="password"
          placeholder="*******"
          className="border border-gray-300 rounded w-full p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}