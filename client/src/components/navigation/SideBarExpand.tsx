import { LightMode } from "../../utils/colors";

const SideBarExpand = () => {
    return(
        <div className="side-bar-expand" style={{borderColor: LightMode.border, color: LightMode.third}}>
            <div className="search" style={{backgroundColor: LightMode.border}}></div>
        </div>
    )
}
export default SideBarExpand;