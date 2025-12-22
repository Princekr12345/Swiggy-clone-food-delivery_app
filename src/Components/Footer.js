
export default function Footer(){

    return(
        <>
        <div className="mb-20 mt-20">
            <div className="w-full h-61">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
            </div>
        </div>

         <div className="w-full h-61 mt-20 bg-gray-300 flex items-center justify-center flex-col border border-gray-300">
            <div className="w-310 h-16 flex mt-20 mb-10 items-center gap-4 ">
                <p className="w-150 h-8 pd-5 font-bold text-2xl">For better experience, download the Swiggy app now</p>
                <div className="w-49 h-16 ml-15">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                </div>
            </div>
        </div>
        </>
    )
}