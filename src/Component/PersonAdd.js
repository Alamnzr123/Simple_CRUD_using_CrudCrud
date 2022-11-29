import React from 'react';
import axios from 'axios';

class PersonAdd extends React.Component {
    state = {
        name: ""
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };
        axios.post('https://crudcrud.com/api/6f156439b090477e90b14486555da09a/persons', { user })
            .then(res => {
                console.log(res.data);
                alert('Add data berhasil')
            })
            .catch(err => {
                console.log(err);
            })
    }

    //react-lifecycle render()
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default PersonAdd;