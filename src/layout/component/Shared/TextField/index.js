import El from "@/library/El"
import Input from "../Day"

const TextField =()=>{
    return El({
        element:"div",
        className:"",
        child:[
            El({
                element:"fieldset",
                className:"border  border-gray px-2 py-2 rounded-md text-gray text-sm font-semibold hover:border-purple hover:border-2 hover:text-purple",
                child:[El({
                    element:'legend',
                    className:" ",
                    child:'Task Name'
                }),
                El({
                    element:"input",
                    id:"taskName",
                    className:"border-none w-full ",
                    placeholder:"Task Name"
                })
                    ]

            })
        ]
    })
}
export default TextField