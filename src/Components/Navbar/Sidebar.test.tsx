import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
    it("renders all menu links", () => {
        render(<Sidebar className="sidebar" hideSidebar={() => {}} />);

        expect(screen.getByText("Textile history of Mittweida")).toBeInTheDocument();
        expect(screen.getByText("Local artisans & Makers")).toBeInTheDocument();
        expect(screen.getByText("Companies and sites")).toBeInTheDocument();
        expect(screen.getByText("Upcoming events")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Privacy")).toBeInTheDocument();
    });
});