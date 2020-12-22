import React from 'react'

function ErrorNotice(props) {
    return (
        <div>
             <div className="error">
                <span>{props.message}</span>
                <button onClick={props.clearError} >x</button>
            </div>
        </div>
    )
}

export default ErrorNotice
