import { BrowserRouter, Routes, Route } from "react-router-dom";
import RickeyAndMorty from "./component/RikeyMorty";
import CharacterDetail from "./component/CharacterDetail";



const CustomRoute = () => {
    return(
        <Routes>
          <Route exact path='/' element={<RickeyAndMorty/>}/>
          <Route exact path='/characterDetail' element={<CharacterDetail/>}/>
        </Routes>
    )
}

export default CustomRoute