import React, { Component } from 'react';
import IssueForm from './issueForm'
import './issueList.css'

export class Issues extends Component {
    render() {
        return (
            <div className="">
                {this.props.issues.map(issue => (
                    <IssueForm key={issue.id} issue={issue} />
                ))}
            </div>
        );
    }
}
export default Issues;

