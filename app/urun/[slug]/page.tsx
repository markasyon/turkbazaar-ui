// app/urun/[slug]/page.tsx
'use client';

import Image from 'next/image';

type PageProps = {
  params: {
    slug: string;
  };
};

// Demo ürün verisi (normalde bir API'den gelir)
const demoUrunler = [
  {
    slug: 'organik-zeytinyagi',
    baslik: 'Organik Zeytinyağı',
    resim: '/urun1.jpg',
    fiyat: 150,
    aciklama: 'Ege’nin doğal zeytinlerinden soğuk sıkım ile üretilmiştir.'
  },
  {
    slug: 'el-dokumasi-hali',
    baslik: 'El Dokuması Halı',
    resim: '/urun2.jpg',
    fiyat: 3200,
    aciklama: 'Anadolu motifleriyle süslenmiş tamamen el yapımı halı.'
  },
  {
    slug: 'ahsap-oyuncak-seti',
    baslik: 'Ahşap Oyuncak Seti',
    resim: '/urun3.jpg',
    fiyat: 450,
    aciklama: 'Doğal ahşaptan yapılmış, sağlıklı ve eğitici oyuncak seti.'
  }
];

export default function UrunDetayPage({ params }: PageProps) {
  const urun = demoUrunler.find((u) => u.slug === params.slug);

  if (!urun) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Ürün bulunamadı!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{urun.baslik}</h1>
      <Image
        src={urun.resim}
        alt={urun.baslik}
        width={500}
        height={500}
        className="rounded shadow mb-6"
      />
      <p className="text-lg text-gray-700 mb-2">💰 Fiyat: ₺{urun.fiyat}</p>
      <p className="text-gray-600">{urun.aciklama}</p>
    </div>
  );
}
