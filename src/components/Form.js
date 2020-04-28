import React , {useState} from "react";

const Form = ({ add }) => {

    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        add(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setValue(e.target.value)} id="todoName" name="todoName" value={value} />
            <button type="submit" >Dodaj</button>
        </form>
    )
}

export default Form;
// ref={(el) => this.inputEl = el}

//onClick={() => this.props.addProduct(this.inputEl.value)}