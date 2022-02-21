import "./home.css"
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios"
import { useLocation } from "react-router-dom";

const Home = () => {
    const [posts, setPost] = useState([])
    const {search} = useLocation()//location has the search property.. /?user=Margo .. hennce destructure out search property

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPost(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <>
            <Header posts={posts}/>
            <div className="home">
                <Post posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home