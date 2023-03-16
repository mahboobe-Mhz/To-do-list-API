
import { svgs } from "@/asset";
import El from "@/library/El";
import filterOption from "../Shared/fiterOption";
import Day from './../Shared/Day/index';
import {  filterNav, removeFilter, removeFilter2 } from "@/library/form/handleSubmitForm";

const ModalFilter=()=>{
    return El({
        element:"div",
        onclick:(e)=>{
            removeFilter2(e)
        },
        className:"absolute  top-0 hidden   w-full h-full ",
        id:"FilterModal",
        child:[
            El({
                element:"div",
                id:"filterBox",
                className:"absolute right-[290px]  opacity-100 w-3/12 h-full shadow-2xl bg-wite" ,
                child:[
                    El({
                        element:"div",
                        className:"flex justify-between mx-3 mt-3 bg-wite",
                        child:[
                            El({
                                element:"h2",
                                className:"text-xl",
                                child:"Filter"
                            }),
                            El({
                                element:"span",
                                onclick:(e)=>{
                                    removeFilter(e)
                                },
                                className:"",
                                innerHTML:svgs.closeIcon
                            }),

                        ]
                    }),
                    El({
                        element: 'form',
                        id: 'add-form',
                        className:
                          'w-full h-full bg-white relative flex gap-12 flex-col items-center justify-start mt-16',
                          onchange:(e)=>{
                            filterNav(e)
                          },
                        child:[
                            El({
                                element:"div",
                                className:"flex flex-col w-full px-5",
                                child:[
                                    El({
                                        element:"label",
                                        className:"",
                                        child:"Priority :",
                                    }), filterOption ({option1:"priority",option2:"Low",option3:"Medium",option4:"Hight",option5:"All",name:"priority"}),                                ]
                            }),
                            El({
                                element:"div",
                                className:"flex flex-col w-full px-5",
                                child:[
                                    El({
                                        element:"label",
                                        className:"",
                                        child:"Status :",
                                    }),filterOption ({option1:"Status",option2:"Todo",option3:"Doing",option4:"Done",option5:"All",name:"status"}),                               ]
                            }),
                            El({
                                element:"div",
                                className:"flex flex-col w-full px-5",
                                child:[
                                    El({
                                        element:"label",
                                        className:"",
                                        child:"Dealine :",
                                    }), Day()                           ]
                            })


                        ]
                        })
                ]

            })
        ]

        
    })
}
export default ModalFilter

