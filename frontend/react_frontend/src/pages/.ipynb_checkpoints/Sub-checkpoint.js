import React from 'react'
import '../style/subject.css'

class Subjects extends React.Component{
    constructor(props){
        super(props);
          this.state = {
            contentList:[],
            activeItem:{
              subcode:this.props.subDet.code,
              text:'',
            },
          }
        this.fetchMsgs = this.fetchMsgs.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
componentDidMount(){
    this.fetchMsgs(this.state.activeItem.subcode)
    }

handleChange(e){
    var name = e.target.name
    
   
    if(name==='message'){
        var value1 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
         text:value1,
      }
    })
    }
  }        
        
        
handleSubmit(e){
    
    e.preventDefault()
    console.log("submitting...")
        
        var url = 'http://127.0.0.1:8000/core/messages/'
        var token=localStorage.getItem('token')
        
        fetch(url, {
          method: 'POST',
          headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          'Content-type':'application/json',
          },
          body: JSON.stringify(this.state.activeItem),
            
        }).then((response)  => {
            this.setState({
               activeItem:{
               subcode:this.props.subDet.code,
               text:'',
            }
            });
           

        }).then(this.fetchMsgs(this.state.activeItem.subcode)).catch(function(error){
          console.log('ERROR:', error)
        })
        
    }
        
        
fetchMsgs(e){
        console.log("fetching messages...")
        var url=`http://127.0.0.1:8000/core/allmsgs/${e}`
        fetch(url, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
        .then(response => response.json())
        .then(data => 
          this.setState({
            contentList:data
          })
      )
    }
        
        
        
render(){
    var contents=this.state.contentList;
    console.log(contents)
    return(
        <div className="SubWrapper"><h1>Id: {this.props.subDet.id}</h1><h1>Subject: {this.props.subDet.title}</h1><h1>Teacher: {this.props.subDet.author}</h1><h1>Code: {this.props.subDet.code}</h1>
        <button onClick={()=>this.props.setSubOpen(false)}>Close</button><br /><br /><br /><br />
        <form onSubmit={this.handleSubmit}  id="form">
                        <input onChange={this.handleChange} className="inset" value={this.state.activeItem.text} type="text" name="message" placeholder="Announce for your class" />
                        
                        <input className="submit-btn" type="submit" name="Add" value="Announce" />
        </form><br/><br/>

        <div className="msgbox">                                                          
        {contents.map(function(msg){
                return(
                    <div className="message" key={msg.id}><h3>{msg.author}</h3><p>{msg.date.substring(0, 10).split("-").reverse().join("-")}</p><br /><p>{msg.text}</p></div>
                        );
        })}
        </div>

        </div>
    );
    }
}
export default Subjects;