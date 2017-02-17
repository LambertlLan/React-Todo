import React from 'react';
import ReactDOM from 'react-dom';
require('../css/app.css');
require('../css/base.css');

class Header extends React.Component {
    render() {
        return <header className="header">
            <h1>todosaa</h1>
            <input className="new-todo" placeholder="请输入内容" onKeyDown={this.props.handelKeyDown}/>
        </header>
    }
}

export default Header;