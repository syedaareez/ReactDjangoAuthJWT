import React from 'react';


class JoinForm extends React.Component {
    constructor(props){
        super(props);
          this.state = {
            joined:[],
            joinedclasses:[],
            activeItem:{
              code:'',
              username:'',
            },
            }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    
    
handleChange(e){
    var name = e.target.name
    
   
    if(name==='code'){
        var value2 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        code:value2,
      }
    })
    }
  }
    
componentDidMount() {
    let arr=[...localStorage.getItem('uniqueArray'),arr]
    console.log(arr)
}
    
    
handleSubmit(e){
    e.preventDefault();
        var code = this.state.activeItem.code;
        var url = `http://127.0.0.1:8000/core/join/${code}`
        
        fetch(url,{
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
        .then(response => response.json())
        .then(data => 
        
          this.setState({
            joined:data,
            joinedclasses:[...this.state.joinedclasses,data],
            activeItem:{
            code:'',
            },
          })

      )
        
    }

   
    
render(){
        var Joinedclasses = this.state.joinedclasses;
        let jsonObject = Joinedclasses.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);
        let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        localStorage.setItem('uniqueArray',uniqueArray);
        return(
            <div>
        <div className="createFormWrapper">
            <div className="createForm">
                <div className="Form">
                    <form onSubmit={this.handleSubmit}  id="form">
                        <input onChange={this.handleChange} className="form-title" value={this.state.activeItem.code} type="text" name="code" placeholder="Add code of class" />
                        <input className="form-submit-btn" type="submit" name="Add" value="join" />
                    </form>
                   
                    </div>
                    {uniqueArray?(<div>{uniqueArray.map(function(joinedclass){
                      return(<div><h1>{joinedclass.title}</h1><h2>{joinedclass.author}</h2><h4>{joinedclass.code}</h4></div>)})}</div>):'Noitem'}         
                     
                </div>
            <br/><br/>
            </div>
            
            </div>
        )
    }
}
export default JoinForm;