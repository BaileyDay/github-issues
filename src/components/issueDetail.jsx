import './issueDetail.css'
import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown/with-html')



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
            <div>
                <h1>Create React App Issue Board</h1>
                <div className='IssueDetail'>
                    {<ReactMarkdown source={this.state.issues.body} escapeHtml={false} />}
                </div>

            </div>
        );
    }
}

export default IssueDetail;