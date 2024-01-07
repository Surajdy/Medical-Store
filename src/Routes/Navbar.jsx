import { Link } from "react-router-dom"

function Navbar() {

    const Links=[
        {title:"Home",path:"/"},
        {title:"Products",path:"/Products"},
        {title:"Cart",path:"/Cart"},
        {title:"Login",path:"/Login"},
        {title:"Signup",path:"/Signup"},
        
        


    ]
    return(
        <div className = "navbar" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"20px",color:"#00525D",fontWeight:"bolder"}}>
           {Links.map((link)=>(
            <Link to={link.path} key={link.path}>
                {link.title}
            </Link>
           ))}
        </div>
    )
}

export { Navbar }