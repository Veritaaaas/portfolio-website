import { PiHandshakeFill } from "react-icons/pi";


function Footer() {
  return (
    <div className="bg-black footer p-8">
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 items-center">
                <div className="rounded-full bg-[#F6F5F4] aspect-square h-[200px] max-w-[200px] flex items-center justify-center">
                    <PiHandshakeFill className="text-black text-[100px]"/>
                </div>
                <h1 className="text-[60px] bg-gradient-to-b from-[#0B0B0B] to-[#666666] inline-block text-transparent text-center bg-clip-text inter w-[45rem]">Tell me about your next project</h1>
                <a href="https://www.linkedin.com/in/rodney-maisog/" className="p-2 pl-4 pr-4 bg-[#0B0B0B] text-white rounded-3xl">Contact Me</a>
            </div>
        </div>
       
    </div>
  );
}

export default Footer;