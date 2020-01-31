import React, { Component } from 'react';

class Form extends Component {


    handleChange = (evt) => {
        // console.log(evt)
        this.props.displayGreased(evt.target.checked)
    }

    handleAlphabeticName = (evt) => {
        this.props.displayAlphabeticNames(evt.target.checked)
    }



    render() {
        return (
            <div>
                <form>
                    <label>sort the hogs based on name </label>
                    <input 
                    id="name"
                    type="checkbox"
                    name="name"
                    value={this.props.name}
                    onChange={this.handleAlphabeticName}
                    />
                </form>
                <form>
                    <label>Show Greased </label>
                    <input
                        id='name'
                        type='checkbox'
                        name='greased'
                        value={this.props.greased}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default Form;