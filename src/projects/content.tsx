import React, {useEffect} from "react";

interface Project {
    name: string;
    description: string;
    url: string;
}


const Component = () => {
    // projects state
    const [projects, setProjects] = React.useState<Project[]>([]);


    useEffect(() => {
        const projects = [
            {
                name: "Project 1",
                description: "Project 1 description",
                url: ""
            },
            {
                name: "Project 2",
                description: "Project 2 description",
                url: ""
            },
        ]

        setProjects(projects);
        console.log('projects');
    }, []);
    return (
        <div className="content border d-flex flex-column w-100 vh-100 justify-content-start">
            
            {/* map projects */}
            {projects?.map((project) => (
                <div className="border d-flex flex-column m-2 p-2" id={`project-${project.name}`}>
                    <div className="border">
                        {project.name}
                    </div>
                    <div className="border">
                        {project.description}
                    </div>
                </div>  
            ))}
            

          
        </div>
    );
}

export default Component;
