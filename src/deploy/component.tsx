import React from "react";
import Layout from "../layout/component";
import links from '../navigation/navigation-links';

import { Card } from "react-bootstrap";

interface SupportedAppInterface {
    /**
     * The title of the app
     * @type {string}
     * @memberof SupportedAppInterface
     * @description The title of the app
     */
    name: string;

    /**
     * The description of the app
     * @type {string}
     * @memberof SupportedAppInterface
     * @description The description of the app
     * @example "A simple app that does something"
     * */

    title: string;

    /**
     * The link to the page that will deploy the app
     * @type {string}
     * @memberof SupportedAppInterface
     * @description The link to the page that will deploy the app
     * @example "/deploy/react"
     * */
    link: string;
     
}


const SupportedApp = (props: SupportedAppInterface) => {
    return (
        <a href={props.link}>
        <Card className="m-2">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.name}
                </Card.Text>
            </Card.Body>
        </Card>
        </a>

    );
}


interface SupportedAppListInterface {
    /** 
    * List of supported apps
    * @default []
    * @type {JSX.Element[]}
    * @memberof SupportedAppList
    * */
    children: JSX.Element[];
}





const Deploy = (props: SupportedAppListInterface) => {
    return (
        <div className="w-100 d-flex justify-content-center border h-100 align-self-start m-5">
            {props.children }
        </div>
    )
}



const Component = () => {
    return (
        <Layout child={<Deploy children={[
        <SupportedApp name='React' title='React' link={links().reactDeployment.link}/>,
        <SupportedApp name='Angular' title='Angular' link={links().reactDeployment.link}/>,
        <SupportedApp name='Node Express' title='Node Express' link={links().reactDeployment.link}/>
    ]}/>} />
        
    );
}

export default Component;