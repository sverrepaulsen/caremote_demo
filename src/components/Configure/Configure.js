import React, {useState, useEffect, useRef} from "react";
import db from  "../../app/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"; 

export default function Configure() {
    const [blogs,setBlogs] = useState([])
    const hasFetchedData = useRef(false);


    useEffect(() => {
        if(!hasFetchedData.current)
        {
            fetchBlogs();
            hasFetchedData.current = true;
        }
        console.log(blogs)
      }, )

    const fetchBlogs = async () => {
        const q = query(collection(db, "Blogs"), where("id", ">", 1)); //, where("capital", "==", true)
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setBlogs(blogs => [...blogs, doc.data()])
        });
    }

    return (
        <div className="App">
            {
                blogs && blogs.map(blog => {
                return(
                    <div key={blog.id} className="blog-container">
                        <h4>{blog.title}</h4>
                        <p>{blog.body}</p>
                    </div>
                )
                })
            }
        </div>
  );
}
