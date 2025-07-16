import { Link } from "wouter";
import { IoClose } from "react-icons/io5";

interface SideBarProps {
    className: string;
    hideSidebar: () => void;
    children?: React.ReactNode;
}
export default function Sidebar({className,hideSidebar}:SideBarProps) {
    return (
        <div className={className}>
            <IoClose onClick={hideSidebar} className="close-icon" />
            <div className="line-design">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <ul className="list-items">
                <li className="list-title">
                    <Link className="text-title" href="#">Textile history of Mittweida</Link>
                </li>
                <li><Link onClick={hideSidebar} href="/localartisans">Local artisans & Makers</Link></li>
                <li><Link onClick={hideSidebar} href="/institutions">Institutions</Link></li>
                <li><Link onClick={hideSidebar} href="/companies">Companies and sites</Link></li>
                <li><Link onClick={hideSidebar} href="/events">Upcoming events</Link></li>
            </ul>
            <a className="lang-converter" href="#">EN/DE</a>
            <ul className="info-items">
                <li><Link onClick={hideSidebar} href="/public">About</Link></li>
                <li><Link onClick={hideSidebar} href="/news">Contact us</Link></li>
                <li><Link onClick={hideSidebar} href="/about">News</Link></li>
                <li><Link  onClick={hideSidebar} href="/about">Privacy</Link></li>
            </ul>
        </div>
    );
}
