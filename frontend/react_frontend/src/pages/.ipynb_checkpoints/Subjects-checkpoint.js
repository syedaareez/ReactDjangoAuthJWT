import React from 'react'
import '../style/subject.css'

class Subjects extends React.Component{
    
    constructor(props){
    super(props);
      this.state = {
        contentList:[],
        }
        this.fetchSubjects = this.fetchSubjects.bind(this)
        this.leaveSubject = this.leaveSubject.bind(this)
      }
    
    
    componentDidMount(){
    this.fetchSubjects()
    }
    
    fetchSubjects(){
        console.log("fetching...")
        fetch('http://127.0.0.1:8000/core/joined/', {
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
    
    leaveSubject(sub){
        var code=sub.code
        console.log("leaving...",code)
        var url = `http://127.0.0.1:8000/core/leave/${code}`;
        fetch(url, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).then(this.fetchSubjects())
    }
    
    
    render(){
        var contents=this.state.contentList;
        console.log(contents)
        var self=this;
        return(
            <div className='subject-wrapper'>
            <button onClick={this.fetchSubjects}>Refresh</button>

            {contents.map(function(con){
                return(
                    <div key={con.id}>
                        <h1 >{con.student}</h1>
                        {con.subjects.map(function(sub){
                return(
                <div onClick={()=>self.props.OpenIt(sub)} className="subjects" key={sub.id}><h1 >{sub.id}</h1>
                        <h1 >{sub.title}</h1>
                        <h1 >{sub.code}</h1>
                        <h1 >{sub.author}</h1>
                        <button onClick={()=>self.leaveSubject(sub)}>Leave</button>
                         </div>)})}
                        
                    </div>);
        })}
            </div>
        );
    }
}
export default Subjects;
