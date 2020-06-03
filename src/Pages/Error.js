import React from "react";
import {Link} from 'react-router-dom';
import { render } from "@testing-library/react";

export default class Error extends React.Component{
    render(){
        return(
            <div>
            Page not found
            <Link to='/' className='btn-primary'>
                        Return Home
                    </Link>
            </div>
        )
    }
}