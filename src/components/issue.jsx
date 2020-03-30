import React, { Component } from 'react';
import IssueForm from './issueForm'

export class Issues extends Component {
    render() {
        return (
            <div>
                {this.props.issues.map(issue => (
                    <IssueForm key={issue.id} issue={issue} />
                ))}
            </div>
        );
    }
}
export default Issues;
