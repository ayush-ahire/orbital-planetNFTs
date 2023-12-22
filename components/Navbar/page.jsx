import Link from "next/link"
import logo from "./saturn.png"
import planet1 from "./planet1.png"
import planet2 from "./planet2.png"
import planet3 from "./planet3.png"
import planet4 from "./planet4.png"
import "./index.css"
const Navbar = () => {
    return (

        <div className="herosection relative flex flex-col h-[80rem] w-full">
            <video className="absolute top-[-340px] h-full w-full left-0 z-[-1] object cover" autoPlay loop muted playsInline>
                <source src="/video.mp4" />
            </video>
            <div className="navbar transparent text-white relative z-[1]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Marketplace</a></li>
                            <li>
                                <a>Team</a>

                            </li>
                            <li><a>Social</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-xl"><img src={logo.src} className="h-[24px]" />Orbitals</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Marketplace</a></li>
                        <li>
                            <a>Team</a>
                        </li>
                        <li><a>Social</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white">Buy Now</a>
                </div>
            </div>
            <div className="title-text flex justify-center text-center text-white text-[86px] mt-[15px]"> <p>The first <span>3D</span> NFT planets in the crypto market</p></div>
            <div className="planets flex absolute">
                <img className="planet1 relative top-[330px]" src={planet1.src} alt="can't load image" />
                <img className="planet2 relative top-[400px] left-[100px]" src={planet2.src} alt="can't load image" />
                <img className="planet3 relative top-[330px] left-[120px]" src={planet4.src} alt="can't load image" />
                <img className=" planet4 relative top-[440px] left-[200px]" src={planet3.src} alt="can't load image" />
            </div>
        </div>


    )

}
export default Navbar