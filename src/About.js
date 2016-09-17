import React, { PropTypes } from 'react';
import {searchGit} from './utils/helpers.js'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'username'
    }
  }
  handleInput(e){
    let value = e.target.value;
    this.setState({
      inputValue:value
    })
  }
  componentDidMount(){
    // searchGit()
    //   .then( (recdata)=>{
        
    //     this.setState({
    //       data:recdata.getdata,
    //       wait:false
    //     })
    //     console.log(this.state.data)
    //   })
    
  }
  render () {
    let gitInfo=(
        <div>
          <h2>{this.state.data.name}</h2>
          <img src ={this.state.data.avatar_url}/> 
        </div>
      )
    return(
        <div>
          <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <button>搜索</button>
         {this.state.wait ? '正在获取数据' : gitInfo}
        </div>
      )
  }
}

export default About;
