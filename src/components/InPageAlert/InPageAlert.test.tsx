import React from "react";
import { render, RenderResult } from "@testing-library/react";
import InPageAlert from "./InPageAlert";


describe("<InPageAlert />", () => {
  test("renders an alert with error styling", () => {
    const tree: RenderResult = render(<InPageAlert type ="error" message="Oh no, there's an error"/>);

    const { container } = tree;
    expect(container).toMatchSnapshot();
  });

  test("renders an alert with success styling", () => {
    const tree: RenderResult = render(<InPageAlert type ="success" message="YAY! Success!"/>);

    const { container } = tree;
    expect(container).toMatchSnapshot();
  });
});
