console.log('app is running');

const app = {
    "title" : "Indecision-App",
    "subtitle" : "Help you make a choice",
    "options" : []
}

const appRoot = document.getElementById("appRoot");

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if(option) {
        app.options.push(option);
        console.log(option);
        event.target.elements.option.value = "";
        render();
    }
}

const onRemoveOptions = () => {
    app.options = [];
    console.log("Cleared")
    render();

}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const decision = app.options[randomNum];
    alert(decision);
    console.log(randomNum);
}

const render = () => {
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveOptions}>Remove all</button>
            <br></br>
            {app.options.length > 0 ? "Here are your options: " : "No options"}
            <br></br>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();

// up to section 3

// Section 3, 31

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
        });
    }

    reset() {
        this.setState(() => {
            return {
                count : 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        );
    }
}

// ReactDOM.render(<IndecisionApp/>, document.getElementById('appRoot'));


class VisibilityApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility : false
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>{ this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (<div> Here are the details </div>)}
            </div>
        );
    }
}

// Section 5
// stateless functional component
const User = () => {
    return (
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>
    )
}

// ReactDOM.render(<User/>, document.getElementById('appRoot'));

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// }

// ReactDOM.render(<User name="Aichurok"/>, document.getElementById('appRoot'));
