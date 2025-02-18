import icon from "../../assets/tailwind-css.svg"
function Header() {
  return (
    <div className="bg-[#e6f2ff] flex justify-between items-center">
        {/* <div className="text-[#002633]">left</div>
        <div className="text-[#002633]">right</div> */}

        <div className="flex items-center gap- p-4">
            <h1>
                <img src={icon} width={70} height={70} alt="" />
            </h1>
            <h3 className="text-[24px]">tailwindcss</h3>
        </div>
        <div>
            <ul className="[#000] flex gap-6">
                <li>Docs</li>
                <li>Components</li>
                <li>Blog</li>
                <li>Showcase</li>
            </ul>
        </div>
        <button className="text-[#000] text-[15px] pl-[10px] py-[4px] p-4 border">Sign in</button>
    </div>
  )
}

export default Header