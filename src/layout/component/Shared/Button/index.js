
import El from "@/library/El";


const variants = {
    contained: 'bg-blue px-8 text-wite font-bold',
    outlined: ' border  text-blue font-bold border-blue',
    link: 'bg-transparent',
  }
  
  export const Button = ({
    element = 'button',
    child,
    classes,
    variant = 'contained',
    ...rest
  }) => {
    return El({
      element,
      className: `${variants[variant]} ${classes} inline-block rounded-md text-sm py-2 px-6`,
      child,
      ...rest,
    })
  }
  