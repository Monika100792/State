import React from 'react';
class warn
 extends React.Component {
constructor(){
    super();
    console.warn ("constructor");
    this.state = {data:false};

}
componentDidMount(){
    console.warn("this.componentDidMount");
    this.state = {data:true};
}
render() {
    console.warn("render");
    return(
        <div> <h1> componentDidMount Life cycle</h1></div>
    );
}
 }
 export default warn;
 