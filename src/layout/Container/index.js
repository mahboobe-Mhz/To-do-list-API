import El from "@/library/El";

export const Container=(child)=>{
    return El({
        element:"div",
        className:'w-auto mx-auto px-6 max-w-7xl',
        child,
    })
}