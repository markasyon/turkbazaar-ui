'use client';

import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="w-full h-48 relative mb-3">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-green-700 font-bold">{price}</p>
    </div>
  );
}