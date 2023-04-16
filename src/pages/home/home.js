import './home.scss';
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";
import Introduce from "../../layout/introduce/introduce";
import KeyFeatures from "../../layout/key-features/key-features";
import Character from "../../layout/character/character";
import Airports from "../../layout/airports/airports";
import RoadMap from "../../layout/road-map/road-map";
import VideoIntroduce from "../../layout/video-introduce/video-introduce";
import Items from "../../layout/items/items";
import {useEffect, useState} from "react";
import {getWindowDimensions} from "../../mixins/window-dimensions";
import Advertising from "../../layout/advertising/advertising";
import TimelineVertical from "../../layout/timeline-vertical/timeline-vertical";

const Home = () =>{

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            <Header windowDimensions={windowDimensions}/>
            {windowDimensions.width > 767.5 ?
                <TimelineVertical/>
                :
                <></>
            }
            <VideoIntroduce/>
            <Introduce/>
            <KeyFeatures windowDimensions={windowDimensions}/>
            <Airports windowDimensions={windowDimensions}/>
            <Character windowDimensions={windowDimensions}/>
            <Items windowDimensions={windowDimensions}/>
            <MiniGames windowDimensions={windowDimensions}/>
            <Advertising windowDimensions={windowDimensions}/>
            <RoadMap windowDimensions={windowDimensions}/>
            <CoreTeam windowDimensions={windowDimensions}/>
            <Footer windowDimensions={windowDimensions}/>
        </>
    )
}

export default Home;