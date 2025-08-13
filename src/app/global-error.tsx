'use client';

import React from 'react';

export type GlobalErrorProps = Record<string, never>;

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
