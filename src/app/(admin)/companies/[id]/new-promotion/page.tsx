'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PromotionForm from '@/app/components/promotion-form';

export default function Page() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
