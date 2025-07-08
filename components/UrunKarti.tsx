'use client';

import Image from 'next/image';

interface Props {
  baslik: string;
  aciklama: string;
  resim: string;
}

export default function UrunKarti({ baslik, aciklama, resim }: Props) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition p-4 text-left">
      <Image src={resim} alt={baslik} width={400} height={300} className="rounded mb-3 w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mb-1">{baslik}</h3>
      <p className="text-sm text-gray-600">{aciklama}</p>
    </div>
  );
}