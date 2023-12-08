import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() { // lifecycle methods only available in class-based components

        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // do nothing
        }

    }

    componentDidUpdate(prevState, prevProps) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("update");
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handleOptionPick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const decision = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: decision }));
    }

    handleAddOption = (option) => {

        if (!option) {
            return "Enter valid value to add!";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleSelectedOption = () => {
        console.log("yeyye");
        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        const title = "Indecision-App";
        const subtitle = "Welcome! Put your life in the hands of a computer!"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handleOptionPick={this.handleOptionPick} />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleSelectedOption}></OptionModal>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}