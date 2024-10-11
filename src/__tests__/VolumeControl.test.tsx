import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from '../components/VolumeControls';

test('button has volume control icon', () => {
  render(<VolumeControls />);

  const svg = screen.getByRole('img');

  expect(svg).toBeCalled();

});