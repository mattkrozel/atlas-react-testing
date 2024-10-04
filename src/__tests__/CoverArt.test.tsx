import CoverArt from "@/components/CoverArt";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test("Image renders correctly", () => {
    const { container } = render(<CoverArt />);
    expect(container).toMatchSnapshot();
  });