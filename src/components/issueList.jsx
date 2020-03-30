import React from 'react';

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
                {data.map(item =>
                    <li key={item.title}>
                        {item.title}>
                    </li>
                )}
            </ul>
        );
    }
}


export default IssueList;