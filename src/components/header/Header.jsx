import "./header.css"
import headerImg from "../../img/headerImg.jpeg"

const Header = ({posts}) => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">{posts.desc}</span>
                <span className="headerTitleLg">{posts.title}</span>
            </div>
            <img src={headerImg} alt="headerImg" className="headerImg" />
        </div>
    )
}

export default Header