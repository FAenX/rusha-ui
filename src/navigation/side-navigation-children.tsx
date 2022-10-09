import React from "react";
import links from "./side-navigation-links";

interface SideNavigationItemInterface {
    title: string;
    icon: string;
    link: string;
}


// create side navigation clickable items
const SideNavigationItem = (props: SideNavigationItemInterface ) => {
    return (
        <a href={props.link} className="border d-flex flex-row m-2 p-2">
            <div className="border">
                {props.icon}
            </div>
            <div className="border">
                {props.title}
            </div>
        </a>
    );
}



export default [
    // home icon
    <SideNavigationItem title={links().home.title}  icon="🚪"    link={links().home.link} />,   
    <SideNavigationItem title={links().projects.title} icon="📁" link={links().projects.link}/>,    // create new project
    <SideNavigationItem title={links().createNewProject.title} icon="📁" link={links().createNewProject.link}/>,    // settings
    <SideNavigationItem  title={links().projectSettings.title} icon="⚙️" link={links().projectSettings.link}/>,    
    <SideNavigationItem title={links().logout.title} icon="🚪" link={links().logout.link}/>,
];