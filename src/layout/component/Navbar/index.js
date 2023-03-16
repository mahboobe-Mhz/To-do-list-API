import El from "@/library/El";
import SearchBox from "../Search";
import { svgs } from "@/asset";
import { showFilter } from "@/library/form/handleSubmitForm";



const Navbar= ()=>{
   return El({
        element:"nav",
        className:"flex  bg-purple text-wite justify-between px-2 py-3 ",
        child:[
            El({
            element:"div",
            className:"flex gap-2",
            child:[
                El({
                    element:"span",
                    className:"mt-2 text-2xl",
                    innerHTML:svgs.titleSvgIcon

                }),
                El({
                    element:"h1",
                    className:"text-xl",
                    child:"My To-Do Tasks"

                }),
              

                ] 

                }),

            El({
                element:"div",
                className:"flex gap-2 ",
                child:[
                    El({
                        element:"div",
                        className:'search',//searching input
                        child:SearchBox(),
                    }),
                    El({
                        element:"span",
                        className:"mt-2",
                        innerHTML:svgs.filterSvgIcon,
                        onclick:()=>{
                            showFilter()
                        }

                    }),
                    El({
                        element:"span",
                        className:"mt-2 ",
                        innerHTML:svgs.insertSvgIcon,
                      onclick:()=>{document.querySelector('#modal').classList.remove('invisible')}

                    }),

                ]


                })
            ]
    })
 
}
export default Navbar