import React from "react";
import links from "./navigation-links";


interface SideNavigationItemInterface {
    title: string;
    icon: string;
    link: string;
    id: string;
}


// create side navigation clickable items
const SideNavigationItem = (props: SideNavigationItemInterface ) => {
    return (
        <a id={props.id} href={props.link} className="border d-flex flex-row m-2 p-2">
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
    <SideNavigationItem title={links().deploy.title} icon="🚪" link={links().deploy.link} id='link-deploy'/>,
    <SideNavigationItem title={links().home.title}  icon="🚪"    link={links().home.link} id='link-home'/>,   
    <SideNavigationItem title={links().projects.title} icon="📁" link={links().projects.link} id='link-projects'/>,    // create new project
    <SideNavigationItem title={links().createNewProject.title} icon="📁" link={links().createNewProject.link} id='link-new-project'/>,    // settings
    <SideNavigationItem  title={links().projectSettings.title} icon="⚙️" link={links().projectSettings.link} id='link-project-settings'/>,    
    <SideNavigationItem title={links().logout.title} icon="🚪" link={links().logout.link} id='link-logout'/>,
   
];