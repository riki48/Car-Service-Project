import Navbar from "./UI/Navbar/Navbar";
import TileList from "./UI/TileList/TileList";
import Search from "./UI/Search/Search";
import StageBtn from "./UI/StageBtn/StageBtn";
import { useDispatch } from "react-redux";
import { setDisplayToSymptomsAction } from "../store/wizardReducer";


function SelectMenu(){
   
    return(
        <div>
            <Navbar/>
            <Search/>
            <TileList/>
            <StageBtn stage="select"/>
        </div>
    )
}
export default SelectMenu;