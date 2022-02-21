import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import ThePost from "../../components/thepost/ThePost"

const SinglePage = () => {
    return (
        <div className="single">
            <ThePost />
            <Sidebar />
        </div>
    )
}

export default SinglePage