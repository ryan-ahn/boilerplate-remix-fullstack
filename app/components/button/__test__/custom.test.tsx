import { render, screen } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';

import customButton from '@components/button/custom';

describe('Footer component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: customButton,
      },
    ]);

    render(<RemixStub />);

    expect(screen.getAllByTestId('Footer')).toMatchSnapshot();
  });
});
