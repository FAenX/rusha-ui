import React, { useEffect } from "react";
import Layout from "../layout/component";

import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {deploy} from '../data';
import {useLocation} from 'react-router-dom';
import SuccessfulDeployment from "./successful-deployment";
import {CreateProjectResponseInterface} from '../types'

  

const ReactSuccessFulDeployment = (props?: CreateProjectResponseInterface) => {
    // projectInfo state
    const [projectInfo, setProjectInfo] = React.useState<CreateProjectResponseInterface>({});

    useEffect(() => {
        console.log(props);
        if (props) {
            setProjectInfo(props);
        }
    }, [props]);
    return (
        <div className="content border d-flex flex-column p-2">           
            <p className="h4">{projectInfo?.project_name}</p>
            <p className="text-muted">Git repo: {projectInfo?.local_git_repo}</p>
            <p className="text-muted">Created date: {projectInfo?.created_at}</p>           
        </div>
    );
}

const ReactDeployment = () => {

    const [projectName, setProjectName] = React.useState("");
    const [responseData, setResponseData] = React.useState<CreateProjectResponseInterface>();
    const [done, setDone] = React.useState(false);


    const clickHandler = async () => {
        console.log(projectName);
        try{
            const data = await deploy({payload: {
                projectName,
                app: "react"
            }, path: "deploy/"});
            console.log(data);
            setResponseData(data);
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
                <SuccessfulDeployment child={
                    <ReactSuccessFulDeployment 
                        id={responseData?.id} 
                        project_name={responseData?.project_name} 
                        local_git_repo={responseData?.local_git_repo}
                        created_at={responseData?.created_at}
                    />
                }/>
                </div>}
        
        </div>
    );
}


export default ReactDeployment;