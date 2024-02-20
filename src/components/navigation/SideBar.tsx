import {ReactNode, useState} from "react";
import {motion, Variants} from "framer-motion"
//Utils
import { Darkmode } from "../../utils/colors";
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SideBarExpand from "./SideBarExpand";

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
        icon: <AppsOutlinedIcon />,
        expand: <SideBarExpand />
    },
]

const itemVariants: Variants = {
    visible: {
        opacity: 1,
        left: "0",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.2
        }
    },
    hidden: {
        opacity: 1,
        left: "-300px",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.2
        }
    }
}

const SideBar = () => {

    const [active, setActive] = useState(tabs[0]);

    return(
        <div className="side-bar-container">
            <div className="side-bar-left" style={{backgroundColor: Darkmode.primary, borderColor: Darkmode.secondary}}>
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
            <motion.div
                initial="hidden"
                animate={active.expand ? "visible" : "hidden"}
                variants={itemVariants}
                style={{position: "relative"}}
            >
                <SideBarExpand />
            </motion.div>

        </div>
    )
}

export default SideBar;