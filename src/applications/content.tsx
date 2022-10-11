import React, {useEffect} from "react";
import {projectList} from '../data';
import {CreateProjectResponseInterface} from '../types'
import Button from 'react-bootstrap/Button';





const Component = () => {
    // projects state
    const [projects, setProjects] = React.useState<CreateProjectResponseInterface[]>();


  
    useEffect(() => {
        (
            async () => {
                // get projects
                const getProjects = await projectList();
                console.log(getProjects);
                setProjects(getProjects);
            }
        
        )()
        
    }, []);
    return (
        <div className="content border d-flex flex-column w-100 justify-content-start m-5 p-5">

            <div className="border m-2 p-2 d-flex">
                <i className="bi bi-view-stacked border d-flex align-items-center p-2" style={{fontSize: 100}}></i>
                <div className="m-2 p-2 border d-flex justify-content-start flex-column">
                    <p className="display-6">Applications</p>
                    <p className="text-muted">A very long example description</p>
                </div>
            </div>

            <div className="border m-2 p-2 d-flex flex-column">

                {/* map projects */}
                {projects?.map((project, index) => (
                    <div className="border d-flex  m-2 p-2" id={`project-${project.id}}`}>
                        <i className="bi bi-app border d-flex  p-2" style={{fontSize: 50}}></i>
                        <div className="m-2 p-2 border d-flex justify-content-start flex-column lh-1 flex-grow-1">
                            <p className="lead">
                                {project.project_name}
                            </p>
                            <p className="">
                                {project.local_git_repo}
                            </p>
                            <p className="">
                                {project.created_at}
                            </p>
                        </div>

                        <Button 
                        variant="outline-primary" 
                        className="m-2 p-2 border d-flex justify-content-center align-items-center align-self-end  w-25" 
                        > info </Button>

                    </div>  
                ))}

            </div>
            

          
        </div>
    );
}

export default Component;
