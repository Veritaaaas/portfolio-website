import Header from "./Header";
import image from "../../assets/personal_pic.png"
import MyParticles from "./MyParticles";

function landing_page() {
    return (
        <div className="bg-[#D3D3D3] landing_page pt-4 relative">
            <MyParticles/>
            <Header className="z-10"/>
            <div className="grid grid-cols-2">
                <div className="">
                    <img src={image} alt="personal_pic" className="h-[720px] flex items-center " />
                </div>
                <div className="flex justify-center items-center z-10">
                    <h1 className="text-[70px] w-[36rem] 
                    bg-gradient-to-b from-[#0B0B0B] to-[#666666]
                    inline-block text-transparent bg-clip-text inter">Aspire to Create Digital Solutions for Real World Problems</h1>
                </div>
            </div>
        </div>
    )
}


export default landing_page;