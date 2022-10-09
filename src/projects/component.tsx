import React from "react";
import Layout from "../layout/component";


const PlaceHolder = () => {
    return (
        <div className="content border d-flex flex-column w-100 vh-100 justify-content-center">
            
            <div className="d-flex justify-content-center">
                Projects
            </div>
          
        </div>
    );
}

const Component = () => {
    return (
        <Layout child={<PlaceHolder />} />
        
    );
}

export default Component;

