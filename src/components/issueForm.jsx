import React from 'react';
import './issueList.css'

const IssueForm = ({ issue: { html_url, title, body, user } }) => {
    return (
        <div className="IssueCard">
            <h4>
                Issue: <a href={html_url} id="IssueTitle"><strong>{title}</strong></a>
            </h4>
            <h4>
                Submitted by: <a href={user.url}>{user.login}</a>
            </h4>
            {/* 
            <p>
                <br />
                <strong>
                    Problem: <br /> <br />
                </strong>{' '}
                {body}
            </p> */}

        </div>
    );
};

export default IssueForm;