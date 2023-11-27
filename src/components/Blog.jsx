import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const [id , setId] = useState("");
    const [Name , setValueFirstName] = useState("");
    const [LastName , setValueLastName] = useState("");
    const [Age , setValueAge] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data={ Name,LastName,Age};

        fetch("http://localhost:3000/Blogs",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
          }).then((res)=>{
            alert('Saved successfully.')
            navigate('/');
          }).catch((err)=>{
            console.log(err.message)
          })
    }

    return ( 
        <section className="blog-section">
            <form onSubmit={handleSubmit}>
            <label>Enter Your Id</label>
                <input
                    value = {id}
                    onChange={(e)=> setId(e.target.value)}
                    type="text"
                />
                <label>Enter Your First Name</label>
                <input
                    value = {Name}
                    onChange={(e)=> setValueFirstName(e.target.value)}
                    type="text"
                    required
                />
                <label>Enter Your Last Name</label>
                <input
                    value = {LastName}
                    onChange={(e)=> setValueLastName(e.target.value)}
                    type="text"
                    required
                />
                <label>Enter Your Age</label>
                <input 
                    value = {Age}
                    onChange={(e)=> setValueAge(e.target.value)}
                    type="text" 
                    required
                />
                <button className="submit" type='submit' >add new blog</button>
            </form>
        </section>
     );
}
 
export default Blog;