import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout component", () => {
  test("renders children correctly", () => {
    const testId = "child-component";

    render(
      <Layout>
        <div data-testid={testId}>Test child component</div>
      </Layout>
    );

    const childComponent = screen.getByTestId(testId);

    expect(childComponent).toBeInTheDocument();
    expect(childComponent).toHaveTextContent("Test child component");
  });
});
