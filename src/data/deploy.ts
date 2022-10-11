import axios from 'axios';

const apiUrl = 'http://localhost:5000'

interface deployArgs {
    payload: object;
    path: string;
}


// call deploy backend
const deploy = async (args: deployArgs)=> {
    const { payload, path } = args;
    const { data } = await axios.post(`${apiUrl}/${path}`,payload);
    return data;
};

export  {
    deploy
};