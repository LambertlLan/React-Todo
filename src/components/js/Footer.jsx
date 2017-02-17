import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() {
        return <footer className="footer">
        <span className="todo-count">
            <strong>{this.props.total}</strong>
            <span>条已选中</span>
        </span>
        </footer>
    }
}

export default Footer;