import {Data} from "../data/data"
import "./styles/header.css"

export const Header = () => {
    return(
        <div className = "header">
        {Data.title}
        </div>
    )
}