import {describe, it, expect} from "vitest";
import Cards from "./Cards.tsx";
import {render, screen} from "@testing-library/react";
import tenowoImage from "./Images/tenowo.jpg";


describe("Cards component", () => {
    it('should render its text', () => {
       render(<Cards id={1}
                     title={"TENOWO Mittweida GmbH"}
                     about={"Alte Pfarrhäuser is a historic museum showcasing Mittweida’s rich past.\n"}
                     textile={"Nonwovens"}
                     image={tenowoImage}
                     category={"Companies"}
                     location={"Viersener Straße 18, 09648 Mittweida"}
                     coords={[50.99341767472814, 12.951315084656823]}>

       </Cards>)


        expect(screen.getByText("TENOWO Mittweida GmbH")).toBeInTheDocument();
        expect(screen.getByText(/Alte Pfarrhäuser/)).toBeInTheDocument();
        expect(screen.getByText("3km")).toBeInTheDocument();
    });
});