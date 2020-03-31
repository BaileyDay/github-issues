import React, { Component } from 'react';



class IssueDetail extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const number = (this.props.location.pathname)
        try {
            const res = await fetch(
                `https://api.github.com/repos/facebook/create-react-app${number}`
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
        console.log(this.state.issues)

    }


    render() {
        return (
            <div className='IssueList'>
                <h1>Create React App Issue Board</h1>
                {this.state.issues.body}

            </div>
        );
    }
}

export default IssueDetail;