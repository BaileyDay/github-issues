import React from 'react';
import Issue from './issue'

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    render() {
        const { data } = this.state;
        return (
            <ul>
                {data.map(issue =>
                    <Issue key={issue.id}></Issue>
                )}
            </ul>
        );
    }
}


export default IssueList;