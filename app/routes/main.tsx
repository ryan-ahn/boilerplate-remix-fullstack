import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix!' },
];

export default function Main() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
