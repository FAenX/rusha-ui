import React from "react";
import Layout from "../layout/component";

import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dataFunctions from '../data';

const ReactDeployment = () => {

    const [projectName, setProjectName] = React.useState("");


    const clickHandler = () => {
        console.log(projectName);
        const data = dataFunctions.deploy({payload: {projectName}, path: "deploy/react"});
        console.log(data);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setProjectName(e.target.value);
    }
    return (
        <div className="content border d-flex flex-column  w-100  justify-content-center align-self-start m-5 p-5">
            <Form.Label>Project name</Form.Label>
            <Form.Control
                type="text"
                id="project-name"
                aria-describedby="project-name"
                placeholder="Enter project name"
                onChange={changeHandler}
            />
            <Form.Text id="project-name" muted>
                Please enter a name for your project
            </Form.Text>

            <Button onClick={clickHandler} className="w-25 m-2 align-self-end" variant="success" size='sm'>Submit</Button>
        </div>
    );
}



const Component = () => {
    return (
        <Layout child={<ReactDeployment/>}/>
        
    );
}

export default Component;