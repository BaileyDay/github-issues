import React, { Component } from 'react';



class IssueDetail extends Component {
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
                {this.state.issues.map(issue => (
                    console.log(issue.title)
                ))}
            </div>
        );
    }
}

export default IssueDetail;