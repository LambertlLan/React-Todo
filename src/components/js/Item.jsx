import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    onChange=(event)=>{
        this.setState({
            checked:event.target.checked,
        })
        this.props.handelChange(event.target.checked,event.target.id)
    };
    handleDelete=()=>{
      this.props.handleDelete(this.props.id);
    };
    render() {
        return <li className={this.props.compile ? "": "completed"}>
            <div className="view">
                <input className="toggle" type="checkbox" id={this.props.id} checked={this.props.compile} value={this.props.txt} onChange={this.onChange}/>
                <label>{this.props.txt}</label>
                <button className="destroy" onClick={this.handleDelete}></button>
            </div>
            <input className="edit" defaultValue="多多对对对"/>
        </li>
    }
}
export default Item;
