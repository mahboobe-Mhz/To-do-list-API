import El from "@/library/El"
import Modal from "../modal";
const ShowModal= () =>{
    return El({
        element:"section",
        id:"modal",
        className:"absolute top-0 left-0  backdrop-blur-sm w-full h-full flex justify-center items-center invisible  bg-gray opacity-90",
        child:[
            El({
                element:"div",
                className:"bg-wite w-8/12 rounded-md px-3 py-3",
                child:Modal(),
            })
        ]
    })
}
export default ShowModal