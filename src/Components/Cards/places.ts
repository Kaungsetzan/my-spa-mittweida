import tenowoImage from "./Images/tenowo.jpg";
import Museum from"./Images/Museum.jpg"
import Hochschule from "./Images/hs-mittweida.jpg"
import PIET from"./Images/PIET.jpg"
import Muellerhof from"./Images/Muellerhof.jpg"
import Werkbank32 from"./Images/Werkbank32.jpeg"
import Lederwaren from"./Images/Lederwaren-Brühl.jpeg"
import Liebers from"./Images/Leder Liebers.jpg"
import Volkshochschule from"./Images/Volkshochschule Mittelsachsen.png"

export type placeProps = {
    id: number;
    title: string;
    about: string;
    image: string;
    category: string;
    location: string;
    textile: string;
    coords?: [number, number];
};





const places: placeProps[] = [

    {
        id: 1,
        title: "Alte Pfarrhäuser Museum",
        about:
            "Alte Pfarrhäuser is a historic museum showcasing Mittweida’s rich past.\n" +
            "Its exhibits feature local history, culture, and the town’s textile heritage.\n" +
            "Visitors can explore traditional tools and stories of local craftsmanship.\n" +
            "It’s a perfect destination to understand Mittweida’s industrial roots.",
        image: Museum,
        category: "Institutions",
        location: "Kirchberg 3–7, 09648 Mittweida",textile:"Nonwovens",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 2,
        title: "Hochschule Mittweida (University of Applied Sciences)",
        about:
            "Hochschule Mittweida is a modern technical university.\n" +
            "It offers academic programs that may include textile and material studies.\n" +
            "Students and researchers collaborate on engineering and innovation.\n" +
            "The campus hosts lectures, labs, and public presentations.",
        image: Hochschule,
        category: "Institutions",
        location: "Technikumplatz 17, 09648 Mittweida",textile:"Nonwovens",
        coords: [50.98763242128026, 12.972969568715337]
    },{
        id: 3,
        title: "TENOWO Mittweida GmbH",
        about:
            "TENOWO Mittweida GmbH specializes in advanced technical nonwovens.\n" +
            "Their textiles serve industries like automotive, filtration, and construction.\n" +
            "With years of innovation, they shape the future of sustainable materials.\n" +
            "They also offer insights into modern textile production processes.",
        image: tenowoImage,
        category: "Companies",
        location: "Viersener Straße 18, 09648 Mittweida",textile:"Nonwovens",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 4,
        title: "PIET Rosso Textile Manufacturing",
        about:
            "PIET Rosso is a textile manufacturer specializing in pattern making and sewing.\n" +
            "They offer expertise in garment production and custom designs.\n" +
            "Contact them to explore their processes and learning opportunities.\n" +
            "Their work supports local creativity and skilled craftsmanship.",
        image: PIET,
        category: "Artisans",
        location: "(Address to be confirmed — Mittweida)",textile:"Nonwovens",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 5,
        title: "Müllerhof Mittweida",
        about:
            "Müllerhof Mittweida is a community center fostering textile arts and crafts.\n" +
            "It hosts regular sewing and handicrafts meetups.\n" +
            "Locals connect here to practice skills and share knowledge.\n" +
            "A great place to explore traditional fabric techniques in Mittweida.",
        image: Muellerhof,
        category: "Artisans",
        location: "Kirchstraße 3, 09648 Mittweida",textile:"Wool",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 6,
        title: "Werkbank32",
        about:
            "Werkbank32 is an innovation space that may host textile-relevant events.\n" +
            "It provides an inspiring atmosphere for creative minds and makers.\n" +
            "Workshops and projects here encourage hands-on exploration.\n" +
            "Keep an eye on their schedule for upcoming activities.",
        image: Werkbank32,
        category: "Artisans",
        location: "(Address to be confirmed — Mittweida)",textile:"Nonwovens",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 7,
        title: "Lederwaren Brühl",
        about:
            "Lederwaren Brühl is a family-run leather goods shop.\n" +
            "They offer handbags, luggage, belts, and accessories.\n" +
            "With 20+ years in Mittweida, they’re known for quality products.\n" +
            "A trusted place for leather items and personal gifts.",
        image: Lederwaren,
        category: "Stores",
        location: "Rochlitzer Straße 61, 09648 Mittweida",textile:"Leather",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 8,
        title: "Leder Liebers",
        about:
            "Leder Liebers is a traditional leather goods retailer in Mittweida.\n" +
            "They stock famous brands like Fossil and Samsonite.\n" +
            "Find schoolbags, wallets, belts, and stylish accessories.\n" +
            "Known for personal service and premium products.",
        image: Liebers,
        category: "Stores",
        location: "Weberstraße 19, 09648 Mittweida",textile:"Leather",
        coords: [50.99341767472814, 12.951315084656823]
    },
    {
        id: 9,
        title: "Volkshochschule Mittelsachsen (Mittweida branch)",
        about:
            "The Volkshochschule Mittelsachsen offers hands-on textile workshops.\n" +
            "Learn traditional skills like sewing, lace-making, and felting.\n" +
            "Courses suit all levels and encourage creative practice.\n" +
            "Visit their program page for up-to-date offerings and schedules.",
        image: Volkshochschule,
        category: "Institutions",
        location: "(Refer to VHS Mittelsachsen website for Mittweida address)", textile:"Nonwovens",
        coords: [50.99341767472814, 12.951315084656823]
    }
];


export default places;