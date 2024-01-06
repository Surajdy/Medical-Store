import { Link } from "react-router-dom"

function Navbar() {

    const Links=[
        {title:"Home",path:"/"},
        {title:"Products",path:"/Products"},
        {title:"Login",path:"/Login"},
        {title:"Signup",path:"/Signup"},
        {title:"Cart",path:"/Cart"},
        {title:"Checkout",path:"/Checkout"},


    ]
    return(
        <div className = "navbar" >
           {Links.map((link)=>(
            <Link to={link.path} key={link.path}>
                {link.title}
            </Link>
           ))}
        </div>
    )
}

export { Navbar }