type Props = {
  params: {
    slug: string;
  };
};

export default function UrunDetay({ params }: Props) {
  const { slug } = params;

  // DEMO veri - slug'a göre veri çekimi henüz eklenmedi
  const urun = {
    baslik: "Örnek Ürün",
    aciklama: "Bu ürünün açıklaması burada yer alır.",
    fiyat: "₺150",
    resim: "/urun.jpg",
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{urun.baslik}</h1>
      <img
        src={urun.resim}
        alt={urun.baslik}
        className="w-full h-auto mb-4 rounded"
      />
      <p className="text-lg text-gray-700 mb-2">Fiyat: {urun.fiyat}</p>
      <p className="text-gray-600">{urun.aciklama}</p>
      <p className="mt-4 text-sm text-gray-400">Slug: {slug}</p>
    </div>
  );
}
