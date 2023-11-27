import { useEffect, useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [data , setData] = useState([]);
    const navigate = useNavigate()
    const fetchBlogs = async () => {
        const reponse = await fetch('http://localhost:3000/Blogs')

        const blogData = await reponse.json()

        setData(blogData)

        /*fetch('http://localhost:3000/Blogs')
        .then((res) =>{
            return res.json()
        }).then((resp) =>{
            setData(resp)
        }).catch((err) =>{
            console.log(err.message)
        })*/
    }

    useEffect(()=>{
        fetchBlogs() 
    }, [])
    const handleDelete = async (id)=>{
        const reponse = await fetch(`http://localhost:3000/Blogs/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })

        const data = await reponse.json()

        setData(currentData =>{
            return currentData.filter((data) => data.id !== id)
        })
    }
    const editBlog = (id)=>{
        navigate("edit/" + id)
    }
    return ( 
        <section className='hero-section'>
            <div className="container">
                {data &&     
                    data.map((blog) =>(
                        <div className="box" key={blog.id}>
                            <div>
                                <h1>Name : {blog.Name}</h1>
                                <h1>LastName : {blog.LastName}</h1>
                                <h1>Age : {blog.Age}</h1>
                            </div>
                            <div className='box-btn'>
                                <button onClick={() => handleDelete(blog.id)}>Delete</button>
                                <button onClick={() => editBlog(blog.id)}>update</button>
                            </div>    
                        </div>
                        
                    ))
                }             
            </div>
        </section>
     );
}
 
export default Home;