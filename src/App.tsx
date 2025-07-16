import './App.css';
import '@fontsource/crimson-text';
import { Fragment } from 'react';
import { Switch, Route } from 'wouter';  // <-- from wouter
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Pages/Map/Map";
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Home from "./Components/Pages/Home/Home.tsx";
import TextilesHistory from "./Components/Pages/TextileHistory/Textiles-history.tsx";
import LocalArtisans from "./Components/Pages/LocalArtisans/LocalArtisans.tsx";
import CardDetails from "./Components/Pages/CardDetails/CardDetails.tsx";
import QRcodescanner from "./Components/Pages/QRCodeScanner/QRcodescanner.tsx";
import Institutions from "./Components/Pages/Institutions/Institutions.tsx";
import Companies from "./Components/Pages/Companies/Companies.tsx";
import Review from "./Components/Pages/Reviews/review.tsx";
import Login from "./Components/Pages/Login/Login.tsx";
import Upcoming from "./Components/Pages/Upcoming/Upcoming.tsx";

function App() {
    return (

            <Fragment>
                <Navbar />
                <Switch>
                <Route path="/" component={Home} />
                <Route path="/home" component={Home} />
                    <Route path="/details/:id" component={CardDetails} />
                    <Route path="/textilehistory" component={TextilesHistory} />
                <Route path="/localartisans" component={LocalArtisans} />
                <Route path="/institutions" component={Institutions} />
                <Route path="/companies" component={Companies} />
                <Route path="/events" component={Upcoming} />
                <Route path="/map" component={Map} />
                <Route path="/login" component={Login} />
                <Route path="/qrcode" component={QRcodescanner} />
                <Route path="/review" component={Review} />
                </Switch>
            </Fragment>

    );
}

export default App;
