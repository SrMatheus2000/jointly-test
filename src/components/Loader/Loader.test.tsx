import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  test("renders children when not loading", () => {
    render(
      <Loader loading={false}>
        <div data-testid="child-component">Test child component</div>
      </Loader>
    );

    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  test("does not render children when loading", () => {
    render(
      <Loader loading={true}>
        <div data-testid="child-component">Test child component</div>
      </Loader>
    );

    expect(screen.queryByTestId("child-component")).not.toBeInTheDocument();
  });

  test("renders CircularProgress when loading", () => {
    render(
      <Loader loading={true}>
        <div>Test child component</div>
      </Loader>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("does not render CircularProgress when not loading", () => {
    render(
      <Loader loading={false}>
        <div>Test child component</div>
      </Loader>
    );

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });
});