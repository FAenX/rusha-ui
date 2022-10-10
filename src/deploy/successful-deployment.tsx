import React, { useEffect } from "react";
import Layout from "../layout/component";

import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dataFunctions from '../data';
import {useLocation} from 'react-router-dom';

interface Props {
    child: JSX.Element;
}

const SuccessfulDeployment = (props: Props) => {


    return (
        <div className="content border d-flex p-2">
           {props.child}
        </div>
    );
}


export default SuccessfulDeployment;