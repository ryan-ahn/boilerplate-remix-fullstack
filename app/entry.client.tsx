import { hydrateRoot } from 'react-dom/client';
import { startTransition, StrictMode } from 'react';
import { RemixBrowser } from '@remix-run/react';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
  );
});
