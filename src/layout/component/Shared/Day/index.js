import El from "@/library/El";
const Day=()=>{
    return El({
        element:"div",
        className:"mt-5 ",
        child:El({
            element:"input",
            name:"day",
            type:"date",
            className:" w-full border border-gray mt-5 py-1 rounded-md px-1 hover:border-purple hover:border-2 "
    
          
        })
    })
    
    
    
}
export default Day