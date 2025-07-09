import Image from "next/image";
import { Metadata } from "next";

// ✅ Tip tanımı - hatayı çözen kısım
interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ Metadata oluşturucu (SEO)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Ürün - ${params.slug}`,
    description: `${params.slug} detay sayfası`,
  };
}

// ✅ Sayfa bileşeni
export default function UrunDetaySayfasi({ params }: PageProps) {
  // Şimdilik demo veriler kullanılıyor, ileride dinamik hale getirilecek
  const urun = {
    baslik: "Demo Ürün Başlığı",
    aciklama: "Bu demo ürünün açıklamasıdır.",
    fiyat: "199 TL",
    resim: "/urun1.jpg",
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <Image
        src={urun.resim}
        alt={urun.baslik}
        width={500}
        height={500}
        className="w-full h-auto mb-4 rounded"
      />
      <h1 className="text-2xl font-bold mb-2">{urun.baslik}</h1>
      <p className="text-lg text-gray-700 mb-2">
        Fiyat: <span className="font-semibold">{urun.fiyat}</span>
      </p>
      <p className="text-gray-600 mb-4">{urun.aciklama}</p>
      <p className="text-sm text-gray-400">Slug: {params.slug}</p>
    </div>
  );
}
