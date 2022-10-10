import React, { useEffect } from "react";
import Layout from "../layout/component";

import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dataFunctions from '../data';
import {useLocation} from 'react-router-dom';
import SuccessfulDeployment from "./successful-deployment";

interface Props {
    response: string[]
}

const ReactSuccessFulDeployment = (props: Props) => {
    return (
        <div className="content border d-flex flex-column">
          <div>{props.response[0][1]}</div>
            <div>{props.response[0][2]}</div>

            
        </div>
    );
}

const ReactDeployment = () => {

    const [projectName, setProjectName] = React.useState("");
    const [deployData, setDeployData] = React.useState([]);
    const [done, setDone] = React.useState(false);


    const clickHandler = async () => {
        console.log(projectName);
        try{
            const data = await dataFunctions.deploy({payload: {
                projectName,
                app: "react"
            }, path: "deploy/"});
            console.log(data);
            setDeployData(data);
            setDone(true);
        } catch (error) {
            console.log(error);
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setProjectName(e.target.value);
    }
    return (
        <div className="content border d-flex flex-column  w-100  justify-content-center align-self-start m-5 p-5">
           {!done && <Form.Label>Project name</Form.Label>}
           {!done && <Form.Control
                type="text"
                id="project-name"
                aria-describedby="project-name"
                placeholder="Enter project name"
                onChange={changeHandler}
            />}
            {!done && <Form.Text id="project-name" muted>
                Please enter a name for your project
            </Form.Text>} 

            {!done &&<Button onClick={clickHandler} className="w-25 m-2 align-self-end" variant="success" size='sm'>Submit</Button>}
            {done && <div>
                <SuccessfulDeployment child={<ReactSuccessFulDeployment response={deployData}/>}/>
                </div>}
        
        </div>
    );
}


export default ReactDeployment;