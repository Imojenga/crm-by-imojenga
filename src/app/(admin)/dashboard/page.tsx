import React from 'react';
import Header from '@/app/components/header';

export type PageProps = Record<string, never>;

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
