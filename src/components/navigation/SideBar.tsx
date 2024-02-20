import {ReactNode, useState} from "react";
//Utils
import { Darkmode } from "../../utils/colors";
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

interface tab {
    name: string,
    icon: ReactNode,
    expand?: ReactNode
}

const tabs: tab[] = [
    {
        name: "Home",
        icon: <HomeOutlinedIcon />
    },
    {
        name: "Applications",
        icon: <AppsOutlinedIcon />
    },
]

const SideBar = () => {

    const [active, setActive] = useState(tabs[0]);

    return(
        <div className="side-bar-container" style={{backgroundColor: Darkmode.primary}}>
            <div className="side-bar-left" style={{borderColor: Darkmode.secondary}}>
                <div className="tab-container">
                    {
                        tabs.map((tab: tab, idx: number) => {
                            return(
                                <div key={idx} className="tab" style={{color: active != tab ? Darkmode.third : Darkmode.fourth}} onClick={() => setActive(tab)}>
                                    {tab.icon}
                                    {active == tab && <div className="active-border" style={{backgroundColor: Darkmode.fourth}}></div>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar;