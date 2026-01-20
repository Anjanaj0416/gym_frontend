export default function Header() {
    return (
        <div className="w-full h-[90px]  flex flex-row justify-between items-center ">
            <button className="w-[250px] h-full ml-10">
                <img  src="/public/Group 10.png"></img>   
            </button>
            <div className="w-auto h-full flex flex-row items-center justify-center gap-16">
                <button className="text-xl text-white hover:text-red-600">Home</button>
                <button className="text-xl text-white hover:text-red-600">About</button>
                <button className="text-xl text-white hover:text-red-600">Classes</button>
                <button className="text-xl text-white hover:text-red-600">Instructors</button>
                <button className="text-xl text-white hover:text-red-600">Membership</button>
                <button className="bg-red-600 text-white text-xl px-5 py-1 hover:bg-white hover:text-red-600">Contact Us</button>

            </div>
        </div>
    )
}