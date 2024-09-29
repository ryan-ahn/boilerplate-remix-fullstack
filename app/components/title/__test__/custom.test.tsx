import { render, screen } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';

import customTitle from '@components/title/custom';

describe('Title component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () =>
          customTitle({
            title: '제목',
            description: '설명',
          }),
      },
    ]);

    render(<RemixStub />);
  });
});
