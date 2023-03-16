import El from "@/library/El";
import TextField from "../Shared/TextField";
import Option from './../Shared/Option/index';
import Day from "../Shared/Day";
import { Button } from "../Shared";
import { handleSubmitForm } from "@/library/form/handleSubmitForm";





const Modal=()=>{
    return El({
        element:"div",
        className:" ",
        child:[
            El({
                element:"h1",
                className:"border-b border-gray  py-2 font-bold",
                child:"New Task"
            }),El({
                element:"form",
                id:"form",
                child:[TextField(),
                    El({
                        element:"div",
                        className:"w-full flex gap-3",
                        child:[
                        Option({option1:"priority",option2:"Low",option3:"Medium",option4:"Hight",name:"priority"}),
                        Option({option1:"Status",option2:"Todo",option3:"Doing",option4:"Done",name:"status"}),
                        Day()]
        
                    }),
                    El({
                        element:"textarea",
                        name:"textArea",
                        className:"border w-full mt-4 h-32 border-gray rounded-md hover:border-2 hover:border-purple"
                    }),
                    El({
                        element:"div",
                        className:" flex justify-between border-t pb-5 border-gray mt-5 pt-6 ",
                        child:[Button({
                            child: 'CANCEL',
                            variant: 'outlined',
                            onclick:()=>{document.querySelector('#modal').classList.add('invisible')
        
                            }
                          }),Button({
                            child: 'SAVE',
                            id:'save',
                            onclick:(e)=>{handleSubmitForm(e)},
                            variant: 'contained',
                            type:"submit"
                          })]
            })
            ]
            })
        ]
    })
}
export default Modal