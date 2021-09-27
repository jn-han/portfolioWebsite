import { MenuItems } from "./MenuItems"

const Navbar = () => {
    return (
        <nav className="NavbarItems">
            <h1 className='navbarLogo'>React</h1>
            <div className='menu-icon'>

            </div>
            <ul>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}><a 
                        className={item.cName} 
                        href={item.url}>{item.title}
                        </a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
