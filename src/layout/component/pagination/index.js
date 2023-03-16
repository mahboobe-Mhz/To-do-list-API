

import { svgs } from '@/asset';
import { pageNext, pagePrevious, sortSelect } from '@/library/form/handleSubmitForm';
import El from './../../../library/El';

const Pagination=()=>{
return El({
    element:"nav",
    className:" absolute right-0 mr-40 mt-5",
    ariaLabel:"Page navigation example",
    child:El({
       element:'ul',
       className:"inline-flex ",
       child:[
        El({
            element:'li',
            child:El({
                element:"div",
            
                className:" pt-1",
                child:[
                    El({
                        element:"span",
                        className:" mr-4",
                        child:"Rows per page"
                    }),
                    El({
                        element:"select",
                        id:'selectPage',
                        onchange:()=>{
                            sortSelect()
                        },
                        className:"border-none mr-10",
                        child:[
                            El({
                                element:"option",
                              
                                child:"All"
                            }),
                            El({
                                element:"option",
                                child:"2"
                            }),
                            El({
                                element:"option",
                                child:"5"
                            }), El({
                                element:"option",
                                child:"10"
                            }),
                        ]
                    })
                ]
            })
        })
       , El({
            element:'li',
            child:El({
                element:"div",
                className:"flex pt-1 pr-2",
                child:[
                    El({
                        element:"span",
                        id:"span1",
                        className:" px-2",
                        child:"1"
                    }),

                    El({
                        element:"span",
                        className:"",
                        child:"of"

                    }),
                    El({
                        element:"span",
                        id:"span2",
                        className:"px-2",
                        child:"1"

                    })
                ]
            })
      
        }),El({
            element:'li',
            className:"",
           child:El({
                element:"div",
                className:"flex ",
                child:[  El({
                    element:"span",
                    onclick:()=>{pagePrevious() },
                    className:"px-5 py-2  mr-3  border-2 border-blue rounded-md focus:bg-gray-100",
                    innerHTML:svgs.previousIcon
                }),El({
                    element:"span",
                    onclick:()=>{
                        pageNext()
                    },
                    className:"px-5 py-2 border-2 border-blue rounded-md focus:bg-gray-100  ",
                    innerHTML:svgs.nextIcon
                })
            ]})
          
        })
        ,
        

    ]

    })
})
}
export default Pagination