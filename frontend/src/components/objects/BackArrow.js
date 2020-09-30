import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useHistory } from 'react-router-dom'


const BackArrow = () => {

    const history = useHistory()

    return (
        <div>

            <div onClick={() => {history.goBack()}} className={"back-arrow"}>
                <HiArrowNarrowLeft />
            </div>

        </div>
    );
}

export default BackArrow;