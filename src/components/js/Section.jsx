import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item';
import {remove} from './unitil';
class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {check:false};
    }
    handleClick=(ev)=>{
        this.props.toggleAll(ev.target.checked)
    }
    render() {
        var txtArr = this.props.txt
        var _this = this
        var listItems = txtArr.map(function (item,index) {
            return <Item key={index} {...item} handelChange={_this.props.handelChange} handleDelete={_this.props.handleDelete}/>
        })
        
        return <section className="main">
            <input className="toggle-all" type="checkbox" defaultChecked={this.state.check} onClick={this.handleClick}/>
            <ul className="todo-list">
                {listItems}
            </ul>
        </section>
    }
}

export default Section;