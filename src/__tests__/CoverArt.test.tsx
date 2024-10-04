import { render } from "@testing-library/react"
import CoverArt from "../components/CoverArt";
import { expect, it, describe } from "vitest"

describe('CoverArt Component', () => {
  it('has expected classname', () => {
    const { getByRole } = render(<CoverArt />);
    const imageElement = getByRole('img');
    expect(imageElement.className).toContain('rounded-md');
  });

  

  
});