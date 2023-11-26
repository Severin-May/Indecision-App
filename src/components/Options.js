import React from "react";
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            {/* <button onClick={this.handleRemoveAll}>Remove all</button> 88 */}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>First add items to get started!</p>}
            <ol>
                {
                    props.options.map((option) => { 
                        return <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>
                    })
                }
            </ol>
        </div>
    );
}

export default Options;