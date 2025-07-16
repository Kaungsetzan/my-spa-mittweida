import "./navbar.css"
import { IoMdMenu } from "react-icons/io";
import { Link } from "wouter";

import {useState} from "react";
import Sidebar from "./Sidebar.tsx";




export default function Navbar (){

    const [CurrentSidebar,SetSidebar]= useState(false);

const ShowSidebar = ()=> SetSidebar(true);
const HideSidebar=()=> SetSidebar(false);

    return(
        <>
        <nav >
            <div className="wrapper brand-container">
            <Link to="/my-spa-mittweida/" className="brand-name">Mittweida</Link>
            </div>
            <IoMdMenu  onClick={ShowSidebar} className="menu-icon" />
        </nav>
              <Sidebar className={"sidebar " + (CurrentSidebar ? "visible" : "hidden")}  hideSidebar={HideSidebar} />
        </>
    )
}