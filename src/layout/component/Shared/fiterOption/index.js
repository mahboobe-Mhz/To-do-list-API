import El from "@/library/El"


const filterOption=({option1,option2,option3,option4,option5,name})=>{
    return El({
        element:"select",
        name:name,
        className:"appearance-none w-full border border-gray mt-5 py-1 rounded-md px-1 hover:border-purple hover:border-2",
        child:[
            El({
                element:"option",
               
                child:option1
            }),  El({
                element:"option",
             
                child:option2
            }),  El({
                element:"option",
                child:option3
            }),  El({
                element:"option",
                child:option4
            }),  El({
                element:"option",
                child:option5
            }),

        ]
    })
}
export default filterOption