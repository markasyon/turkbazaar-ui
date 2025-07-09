// app/urun/[slug]/page.tsx

import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Ürün Detayı - ${params.slug}`,
    description: "Ürün detay sayfası açıklaması",
  };
}

export default function UrunDetay({ params }: Props) {
  const urun = {
    baslik: "El Dokuması Halı",
    aciklama: "Tamamen el işçiliği ile üretilmiş geleneksel halı.",
    fiyat: "₺3.200",
    resim: "/hali.jpg",
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
      <p className="text-gray-600 mb-2">{urun.aciklama}</p>
      <p className="text-sm text-gray-400">Slug: {params.slug}</p>
    </div>
  );
}
