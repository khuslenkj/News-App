"use client"

import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button"  className="text-sm text-[#22241F] font-bold cursor-pointer" onClick={() => router.back()}>
      ←  All stories
    </button>
  );
};