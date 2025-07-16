import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import FilterBox from "./FilterBox.tsx";


describe("FilterBox component", ()=> {
    it("renders textile categories",()=>{
        render(<FilterBox></FilterBox>);
        expect(screen.getByText("Select the specific textile")).toBeInTheDocument();
        expect(screen.getByText("Nonwovens")).toBeInTheDocument();
        expect(screen.getByText("Leather")).toBeInTheDocument();
        expect(screen.getByText("Wool")).toBeInTheDocument();
    })
});