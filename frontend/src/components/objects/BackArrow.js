import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useHistory } from 'react-router-dom'


const BackArrow = (props) => {

    const history = useHistory()

    const changePage = () =>{
        if(props.to){
            history.replace({pathname: props.to, hash: props.hash})
        }else{
            history.goBack()
        }
    }

    return (
        <div>

            <div onClick={() => changePage()} className={"back-arrow"}>
                <HiArrowNarrowLeft />
            </div>

        </div>
    );
}

export default BackArrow;