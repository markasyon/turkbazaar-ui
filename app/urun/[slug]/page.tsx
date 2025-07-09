'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Urun = {
  baslik: string;
  fiyat: number;
  resim: string;
  aciklama: string;
};

export default function UrunDetay({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const urunler: Record<string, Urun> = {
    'organik-zeytinyagi': {
      baslik: 'Organik Zeytinyağı',
      fiyat: 150,
      resim: '/urun1.jpg',
      aciklama: 'Ege bölgesinden %100 doğal zeytinyağı.'
    },
    'el-dokumasi-hali': {
      baslik: 'El Dokuması Halı',
      fiyat: 3200,
      resim: '/urun2.jpg',
      aciklama: 'El yapımı Anadolu halısı, 2x3 metre.'
    },
    'ahsap-oyuncak-seti': {
      baslik: 'Ahşap Oyuncak Seti',
      fiyat: 450,
      resim: '/urun3.jpg',
      aciklama: 'Doğal malzemeden yapılmış sağlıklı oyuncak seti.'
    }
  };

  const urun = urunler[params.slug];

  if (!urun) {
    return <div className="p-8 text-center text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{urun.baslik}</h1>
      <Image src={urun.resim} alt={urun.baslik} width={400} height={300} className="mb-4 rounded" />
      <p className="text-gray-700 text-lg mb-2">💰 {urun.fiyat.toLocaleString()} ₺</p>
      <p className="text-gray-600 mb-6">{urun.aciklama}</p>
      <button
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        onClick={() => router.push('/giris-yap')}
      >
        Teklif Ver
      </button>
    </div>
  );
}
