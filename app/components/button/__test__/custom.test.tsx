import { render, screen } from "@testing-library/react";
import { createRemixStub } from "@remix-run/testing";

import customButton from "@components/button/custom";

describe("Button component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () =>
          customButton({
            color: "primary",
            text: "버튼",
            onClickFunction: () => {},
          }),
      },
    ]);

    render(<RemixStub />);
  });
});
