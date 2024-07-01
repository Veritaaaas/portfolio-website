import "../../index.css";

function Header() {
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("rodneymaisog@gmail.com")
            .then(() => {
                alert("Email copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy email to clipboard", err);
            });
    };

    return (
        <header className="pl-16 pr-16 grid grid-cols-2 justify-center items-center ">
            <div className="flex gap-12">
                <div className="flex light-gray gap-12 rounded-3xl pl-4 pr-2 pt-1 pb-1 items-center">
                    <h2>rodneymaisog@gmail.com</h2>
                    <button className="p-1 pl-4 pr-4 bg-white text-base rounded-3xl" onClick={copyEmailToClipboard}>Copy</button>
                </div>
                <div className="flex light-gray gap-12 rounded-3xl pt-1 pb-1 pr-2 pl-2 items-center">
                    <a href="../assets/cv.pdf" download="Rodney_Maisog_CV.pdf" className="p-1 pl-4 pr-4 bg-white text-base rounded-3xl">CV</a>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex gap-2 text-2xl">
                    <a href="https://www.linkedin.com/in/rodney-maisog/">
                        <h2>LinkedIn</h2>
                    </a>
                    <h2>/</h2>
                    <a href="https://github.com/Veritaaaas">
                        <h2>Github</h2>
                    </a>
                    <h2>/</h2>
                    <a href="https://www.instagram.com/ssevro_/">
                        <h2>Instagram</h2>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;