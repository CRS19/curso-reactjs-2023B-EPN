/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home unit tests", () => {
  it("when the component Home is rendered, then este es la pagina del - home should be in document", () => {
    render(<Home />);

    console.log(screen.debug());

    const homeElement = screen.getByText("Este es el home de mi App");
    const text2 = screen.getByTestId("div 2");
    console.log("text2", text2);

    // @ts-ignore
    expect(homeElement).toBeInTheDocument();
    // @ts-ignore
    expect(text2).toBeInTheDocument();
  });
});
