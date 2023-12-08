import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText} </p>
            <li> 
                <button className="button button--link" onClick={
                    (e) => {
                        props.handleDeleteOption(props.optionText)
                    }
                }>
                    Remove
                </button>
            </li>
        </div>
    );
}

export default Option;