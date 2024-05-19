import { ReactNode } from 'react';
import GlobalStyles from '@styles/global';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStyles />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
