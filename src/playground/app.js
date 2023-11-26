class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleOptionPick = this.handleOptionPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
        }
    }

    componentDidMount() { //lifecycle methods only available in class-based components

        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
    
            if( options ) {
                this.setState(() => ({options : options }));
            }
        } catch (e) {
            // do nothing
        }
 
    }

    componentDidUpdate(prevState, prevProps) {

        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("update");
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options : []})); 
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handleOptionPick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const decision = this.state.options[randomNum];
        console.log(randomNum);
    }

    handleAddOption(option) {

        if(!option) {
            return "Enter valid value to add!";
        } else if(this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({options : prevState.options.concat(option)})); 
    }

    render() {
        const title = "Indecision-App";
        const subtitle = "Put your life in the hands of a computer!"
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handleOptionPick={this.handleOptionPick}/>
                <Options options={this.state.options} 
                         handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.title && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : "Indecision-App default"
}
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// We replaced Action regular component with Action stateless functional presentational component
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleOptionPick}>
                What should I do?
            </button>
        </div>
    );
}

// class Action extends React.Component {

//     // handlePick() { 88
//     //     alert("You got it!");
//     // }
//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handleOptionPick}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

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

// class Options extends React.Component {

//     // constructor(props) { 88
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }

//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     alert("You will remove all the options!");
//     // }

//     render() {
//         return (
//                 <div>
//                     {/* <button onClick={this.handleRemoveAll}>Remove all</button> 88 */}
//                     <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                     <ol>
//                         {
//                             this.props.options.map((option) => { return <Option key={option} optionText={option}/>})
//                         }
//                     </ol>
//                 </div>
//         );
//     }
// }


const Option = (props) => {
    return (
        <div>
            <li> {props.optionText}  
                <button onClick={
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

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li> {this.props.optionText} </li>
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error : error}));
        
        if(!error) {
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('appRoot'));


// section 6, last video 18-min
class OldSyntax {
    constructor() {
        this.name = "Mike";
    }
}

const oldSyntaxtObj = new OldSyntax();

class NewSyntax {
    name = "Jane";
}

const NewSyntaxObj = new NewSyntax();
console.log(NewSyntaxObj.name);