import React from 'react'
import '../style/subject.css'
export const Subjects = ({subjects}) => {
    console.log(subjects);
    
    return (
        <div className='subject-wrapper'>
            {
                subjects.map((item)=>{
                    const {id,title,author,code} = item
                    return <div className="subjects" key={id}>
                        <p className="title">{title}</p>
                        <p className="author">{author}</p>
        <br />
                        <h3>Code</h3>
                        <h4>{code}</h4>
                    </div>
                })
            }
        </div>
    )
}
