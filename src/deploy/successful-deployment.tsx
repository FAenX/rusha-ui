import React, { useEffect } from "react";
import Layout from "../layout/component";

import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {deploy} from '../data';
import {useLocation} from 'react-router-dom';
import {CreateProjectResponseInterface} from '../types'

const SuccessFulDeploymentComponent = (props?: CreateProjectResponseInterface) => {
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

interface Props {
    id?: number;
    project_name?: string;
    local_git_repo?: string;
    created_at?: string;
}

const SuccessfulDeployment = (props: Props) => {


    return (
        <div className="content border d-flex flex-column p-2">
            <div className="d-flex">
                <i className="bi bi-check2-circle border d-flex align-items-center" style={{fontSize: 50}}></i>
                <div className="m-2 p-2 border d-flex align-items-start  flex-column lh-1 flex-grow-1">           
                    <p className="display-6">
                        Succes
                    </p>
                    <p className="text-muted">
                        created
                    </p>
                   
                </div>
            </div>
           <SuccessFulDeploymentComponent {...props} />
        </div>
    );
}


export  {SuccessfulDeployment, SuccessFulDeploymentComponent};