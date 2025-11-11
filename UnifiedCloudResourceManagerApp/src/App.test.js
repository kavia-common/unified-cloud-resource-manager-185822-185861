import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders dashboard heading", async () => {
  render(<App />);
  // AppRoutes lazy-loads Overview which renders "Dashboard"
  const heading = await screen.findByText(/dashboard/i);
  expect(heading).toBeInTheDocument();
});
