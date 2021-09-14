import React from 'react';

class CreateForm extends React.Component {
    constructor(props){
        super(props);
          this.state = {
            activeItem:{
              title:'',
              code:'',
              author:'',
            },}
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    
handleChange(e){
    var name = e.target.name
    
   
    if(name==='title'){
        var value1 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        title:value1,
      }
    })
    }if(name==='code'){
        var value2 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        code:value2,
      }
    })
    }if(name==='author'){
        var value3 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        author:value3,
      }
    })
    }
  }
    
    
    
handleSubmit(e){
    
    var title = this.state.activeItem.title;
    var code = this.state.activeItem.code;
    var author = this.state.activeItem.author;
    
    e.preventDefault()

    console.log('ITEM:',this.state.activeItem)
        
        var url = 'http://127.0.0.1:8000/core/create/'
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
               title:'',
               code:'',
               author:'',
            }
            });
           

        }).catch(function(error){
          console.log('ERROR:', error)
        })
        
    }
    
   
    
render(){
        return(
        <div className="createFormWrapper">
            <div className="createForm">
                <div className="Form">
                    <form onSubmit={this.handleSubmit}  id="form">
                        <input onChange={this.handleChange} className="inset" value={this.state.activeItem.title} type="text" name="title" placeholder="Add Title" />
                        <input onChange={this.handleChange} className="inset" value={this.state.activeItem.author} type="text" name="author" placeholder="Add Your Name" />
                        <input onChange={this.handleChange} className="inset" value={this.state.activeItem.code} type="text" name="code" placeholder="Add Code for class"  />
                        
                        <input className="submit-btn" type="submit" name="Add" value="create" />
                    </form>
                    </div>

                </div>
            </div>
        
        )
    }
}
export default CreateForm;