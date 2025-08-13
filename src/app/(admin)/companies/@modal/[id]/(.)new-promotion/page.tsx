'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export default function Page() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
