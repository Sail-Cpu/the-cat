import {Darkmode} from "../../utils/colors";

const SideBarExpand = () => {
    return(
        <div className="side-bar-expand" style={{borderColor: Darkmode.secondary, color: Darkmode.third}}>
            <div className="search" style={{backgroundColor: Darkmode.secondary}}></div>
        </div>
    )
}
export default SideBarExpand;