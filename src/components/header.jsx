import { Link } from "react-router-dom";

export default function Header({ scrollToSection, refs }) {
    return (
        <div className="w-full h-[90px]  flex flex-row justify-between items-center ">
            <Link to="/" className="w-[250px] h-full ml-10">
                <img  src="/public/Group 10.png"></img>   
            </Link>
            <div className="w-auto h-full flex flex-row items-center justify-center gap-16">
                <button 
                className="text-xl text-white hover:text-red-600" onClick={() => scrollToSection(refs.homeRef)}>Home</button>
                <button className="text-xl text-white hover:text-red-600" onClick={() => scrollToSection(refs.aboutRef)}>About</button>
                <button className="text-xl text-white hover:text-red-600" onClick={() => scrollToSection(refs.classesRef)}>Classes</button>
                <button className="text-xl text-white hover:text-red-600" onClick={() => scrollToSection(refs.instructorsRef)}>Instructors</button>
                <button className="text-xl text-white hover:text-red-600" onClick={() => scrollToSection(refs.membershipRef)}>Membership</button>
                <button onClick={() => scrollToSection(refs.contactRef)} className="bg-red-600 text-white text-xl px-5 py-1 hover:bg-white hover:text-red-600">Contact Us</button>

            </div>
        </div>
    )
}