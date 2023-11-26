let count = 0;
const my_id = 'my_id';
const addOne = () => { console.log("addOne"); count++; renderCounterApp(); }
const substractOne = () => { console.log("substractOne"); count--; renderCounterApp(); }
const resetCount = () => { console.log("resetCount"); count = 0; renderCounterApp(); }

var appRoot = document.getElementById("appRoot");

const renderCounterApp = () => {
    const temp = (
        <div>
            <h2>{count}</h2>
            {/* <button id={my_id} className='button'>+1</button> */}
            <br></br>
            <button onClick={addOne}>+1</button>
            <br></br>
            <button onClick={substractOne}>-1</button>
            <br></br>
            <button onClick={resetCount}>Reset</button>
        </div>
    );

    ReactDOM.render(temp, appRoot);
}

renderCounterApp();


// 
const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() { return this.numbers.map((number) => this.multiplyBy*number);}
}

console.log(multiplier.multiply());
console.log("Lala");