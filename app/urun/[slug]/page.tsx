import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

// Demo ürünler
const urunler = [
  {
    slug: 'organik-zeytinyagi',
    baslik: 'Organik Zeytinyağı',
    resim: '/urun1.jpg',
    fiyat: 150,
    aciklama: 'Soğuk sıkım, tamamen doğal Ege zeytinyağı.'
  },
  {
    slug: 'el-dokumasi-hali',
    baslik: 'El Dokuması Halı',
    resim: '/urun2.jpg',
    fiyat: 3200,
    aciklama: 'El yapımı, Anadolu motifli halı.'
  },
  {
    slug: 'ahsap-oyuncak-seti',
    baslik: 'Ahşap Oyuncak Seti',
    resim: '/urun3.jpg',
    fiyat: 450,
    aciklama: 'Sağlıklı doğal ahşap malzemeden üretilmiştir.'
  }
];

export default function UrunDetayPage({ params }: Props) {
  const urun = urunler.find((u) => u.slug === params.slug);

  if (!urun) {
    return <div className="p-10 text-center text-red-600 text-xl">Ürün bulunamadı!</div>;
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
