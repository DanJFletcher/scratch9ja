import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useHistory } from 'react-router-dom'


const BackArrow = (props) => {

    const history = useHistory()

    return (
        <div>

                <div onClick={() => {history.goBack()}} className={"back-arrow " + props.for}>
                    <HiArrowNarrowLeft />
                </div>

        </div>
    );
}

export default BackArrow;