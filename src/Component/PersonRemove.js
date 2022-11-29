import React from 'react';
import API from '../api';

class PersonRemove extends React.Component {
    state = {
        _id: ""
    }

    handleChange = event => {
        this.setState({ _id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        API.delete(`persons/${this.state._id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err =>
                console.log(err));
    }

    //react-lifecycle render()
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default PersonRemove;