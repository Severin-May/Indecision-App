import React from "react";
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            {/* <button onClick={this.handleRemoveAll}>Remove all</button> 88 */}
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">First add items to get started!</p>}
            <ul>
                {
                    props.options.map((option, index) => {
                        return <Option key={option} optionText={option} count={index+1} handleDeleteOption={props.handleDeleteOption} />
                    })
                }
            </ul>
        </div>
    );
}

export default Options;