import Header from "./Header";
import image from "../../assets/personal_pic.png"

function landing_page() {
    return (
        <div className="">
            <Header />
            <div className="grid grid-cols-2">
                <div className="flex justify-start items-center">
                    <img src={image} alt="personal_pic" className="h-[620px] flex items-center" />
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="text-[70px]">Aspire to Create Digital Solutions for Real World Problems</h1>
                </div>
            </div>
        </div>
    )
}


export default landing_page;