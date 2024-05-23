import "../../index.css";

function Header() {
    return (
        <header className="pl-16 pr-16 grid grid-cols-2 justify-center items-center">
            <div className="flex gap-12">
                <div className="flex light-gray gap-12 rounded-3xl pl-4 pr-2 pt-1 pb-1 items-center">
                    <h2>rodneymaisog@gmail.com</h2>
                    <button className="p-1 pl-4 pr-4 bg-white text-base rounded-3xl">Copy</button>
                </div>
                <div className="flex light-gray gap-12 rounded-3xl pt-1 pb-1 pr-2 pl-2 items-center">
                    <button className="p-1 pl-4 pr-4 bg-white text-base rounded-3xl">CV</button>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex gap-2">
                    <h2>LinkedIn</h2>
                    <h2>/</h2>
                    <h2>Github</h2>
                    <h2>/</h2>
                    <h2>Instagram</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;
