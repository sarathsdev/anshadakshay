import React, { useEffect,useState } from 'react'

export default function AnshadTest2() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setPosts(data.splice(0,10))
        })

    },)

  return (
    <div>
      <center>Welcome to Assignment 2</center>
    <div>
        {
            posts.map((post)=>(
                <div  key={post.id} >
                   <div style={{backgroundColor:'orange' }}> {post.id} </div>
                   <div style={{backgroundColor:'green' }}> {post.title} </div>
                    <div style={{backgroundColor:'blue' }}>{post.body}</div>
                    <br/>
                    </div>
            ))
        }
    </div>
    </div>
  )
}
