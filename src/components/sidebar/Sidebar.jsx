import "./sidebar.css"
import Img from "../../img/aboutme.jpg"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={Img} alt="aboutmeimg" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Sequi quibusdam quas maxime vel quasi.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link className="link" to={`/?cat=${c.name}`}><li className="sidebarListItem">{c.name}</li></Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar