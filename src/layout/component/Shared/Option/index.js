import El from "@/library/El"


const Option=({option1,option2,option3,option4,name})=>{
    return El({
        element:"select",
        name:name,
        className:"w-44 border border-gray mt-10 py-1 rounded-md px-1 hover:border-purple hover:border-2",
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
            }),
        ]
    })
}
export default Option