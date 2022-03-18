import React, {useState, useEffect, useRef} from "react";
import db from  "../../app/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Configure() {
    const navigate = useNavigate();
    const [blogs,setBlogs] = useState([])
    const hasFetchedData = useRef(false);


    useEffect(() => {
        if(!hasFetchedData.current)
        {
            fetchBlogs();
            hasFetchedData.current = true;
        }
      }, )

    const fetchBlogs = async () => {
        const q = query(collection(db, "Blogs")); //, where("capital", "==", true)
        const q1 = query(collection(db, "Blogs"), where("id", ">", 1));
        const q2 = query(collection(db, "Blogs"), where("posted_by", "!=", "Paulsen"))
        const q3 = query(collection(db, "Blogs"), where("contains", "array-contains", "image"))
        const q4 = query(collection(db, "Blogs"), where("title", "in", ['Demo Blog', 'Demo 3']))
        const q5 = query(collection(db, "Blogs"), where("posted_by", "==", "Sverre"), where("contains", "array-contains", "text"));
        const querySnapshot = await getDocs(q5);
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
            <Button onClick={() => navigate("/")}>go back</Button>
        </div>
  );
}
