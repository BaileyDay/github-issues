import React from 'react';

const issue = props => {
    const { issue } = props;
    return (
        <div>
            <li>{issue.title}</li>
        </div>
    );
}

export default issue;
