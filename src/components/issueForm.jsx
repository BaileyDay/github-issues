import React from 'react';
import './issueList.css'

const IssueForm = ({ issue: { html_url, title, body, user, number } }) => {
    return (
        <div className="IssueCard">
            <h4 className="IssueTitle">
                <a href={html_url} id="IssueTitle"><strong>{title}</strong></a>
            </h4>
            <h4 id="PostInfo">
                #{number} opened by: <a href={user.url}>{user.login}</a>
            </h4>
        </div>
    );
};

export default IssueForm;