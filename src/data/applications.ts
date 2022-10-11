import axios from 'axios';

const apiUrl = 'http://localhost:5000'



// call deploy backend
const projectList = async () => {  
    const { data } = await axios.get(`${apiUrl}/projects`);
    return data;
};

export  {
    projectList
};