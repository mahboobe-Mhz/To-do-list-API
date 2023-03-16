import El from "@/library/El";
import { handleSubmitForm } from "@/library/form/handleSubmitForm";
import { Render } from "@/library/render";
import { list } from "postcss";



const Table=()=>{
    return El({
        element:"table",
        className:"w-full border mb-20",
        child:[
            El({
                element:"thead",
                
                child:[
                    El({
                        element:"tr",
                        className:"text-center font-bold opacity-80 ",
                        child:[
                            El({
                                element:"td",
                                className:"border text-left pl-3 pt-3  pb-3",
                                child:"Task Name"
                            }),El({
                                element:"td",
                                className:"border ",
                                child:"Priority"
                            }),El({
                                element:"td",
                                className:"border ",
                                child:"Status"
                            }),El({
                                element:"td",
                                className:"border",
                                child:"Deadline"
                            }),El({
                                element:"td",
                                className:"border",
                                child:"Actions"
                            }),
                        ]
                    })
                ]
            }),
            El({
                element:"tbody",
                id:"tbody"
               
            

              })
        ]
    })
   
}
export default Table