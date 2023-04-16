import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';
import PitchDeck from '../pages/pitch-deck/pitch-deck'

const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="pitch-deck" element={<PitchDeck/>} />
        </Routes>
    )
}

export default Router;