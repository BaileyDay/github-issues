import React, { Component } from 'react';
import Issues from './issue';
import './issueList.css'

class IssueList extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        try {
            const res = await fetch(
                'https://api.github.com/repos/facebook/create-react-app/issues'
            );
            const data = await res.json();
            this.setState({
                issues: data
            });
        } catch (error) {
            this.setState({
                data: error.message
            });
        }
    }

    render() {
        return (
            <div className='IssueList'>
                <h1>Create React App Issue Board</h1>
                <Issues issues={this.state.issues} />
            </div>
        );
    }
}

export default IssueList;