import React from 'react';
import Header from './js/Header';
import Footer from './js/Footer';
import Section from './js/Section';
require('./css/base.css');
require('./css/app.css');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataArr: [], total: 0};
    }
    
    handelKeyDown(event) {
        if (event.keyCode === 13) {
            var data = {
                txt: event.target.value,
                id: Date.now(),
                compile: false
            }
            var newDataArr = this.state.dataArr.concat(data);
            this.setState({
                dataArr: newDataArr
            })
            event.target.value = "";
        }
    };
    
    handelChange = (s, id) => {
        let checks = this.state.dataArr;
        let total = this.state.total
        if (s === true) {
            checks.forEach((item, index) => {
                if (item.id == id) {
                    item.compile = true;
                    total += 1;
                    
                }
            })
        } else {
            checks.forEach((item, index) => {
                if (item.id == id) {
                    item.compile = false
                    total -= 1;
                }
            })
            
        }
        this.setState({
            checkArr: checks
        }, () => {
            this.handelCount(total);
        })
    };
    toggleAll=(bl)=>{
        let dataArr = this.state.dataArr;
        dataArr.forEach((item)=>{
            item.compile = bl
        })
        let num = bl ? this.state.dataArr.length : 0;
        this.setState({
            dataArr:dataArr,
            total:num
        })
    }
    handelCount(num){
        this.setState({
            total:num
        })
    }
    handleDelete=(id)=>{
        let dataArr = this.state.dataArr;
        let num;
        let total = this.state.total;
        dataArr.forEach((item,index)=>{
            if (item.id == id){
                num = index
            }
            if (item.compile == true && item.id == id){
                total-=1;
            }
        });
        dataArr.splice(num,1);
        this.setState({
            dataArr:dataArr,
            total:total
        })
    };
    render() {
        console.log(this.state.dataArr);
        let contanier, footer;
        if (this.state.dataArr.length !== 0) {
            contanier = <Section txt={this.state.dataArr} toggleAll={this.toggleAll} handelChange={this.handelChange} handleDelete={this.handleDelete}/>;
            footer = <Footer total={this.state.total}/>;
        }
        return <div>
            <Header handelKeyDown={this.handelKeyDown.bind(this)}/>
            {contanier}
            {footer}
        </div>
    }
}
;
export default App;