import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://crudcrud.com/api/6f156439b090477e90b14486555da09a/persons')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons
                    .map(person =>
                        //props
                        <li key={person.id}>
                            {person.user.name}
                        </li>
                    )
                }

            </ul>

        )
    }
}

export default PersonList;