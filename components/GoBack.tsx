"use client"

import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button"  className="text-[12px] text-[#22241F] font-[700] cursor-pointer " onClick={() => router.back()}>
      ←  All stories
    </button>
  );
};