import React from 'react'


const GameTag = (props) => {

    return (
        <div>

            <div className={"flex justify-center game-tag " + props.placement }>
                <span>{props.text}</span>
            </div>

        </div>
    );
}

export default GameTag;