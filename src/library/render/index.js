
import { svgs } from '@/asset'
import { loading } from '@/layout/component/laoding'
import El from '../El'
import { deleteHandel, editHandel, showing } from '../form/handleSubmitForm'
import { hiddenLoading } from '../loadingfunc'
const priority={
Low:'bg-gray rounded-2xl p-1',
Medium:'bg-yellow rounded-2xl p-1',
Hight:'bg-red rounded-2xl p-1'
}
const status ={
    Todo:'bg-gray rounded-2xl p-1',
    Doing:'bg-yellow rounded-2xl p-1',
    Done:'bg-red rounded-2xl p-1'
}
export const Render =(state)=>{
    const tbody= document.getElementById("tbody") 
    console.log(state);
  if(true){
    tbody.innerHTML=""
     state?.map(item => 
        {
         const row= El({
        element:"tr",
        id:item.id,
        className:" text-center ",
        child:[
            El({
                element:"td",
                id:"taskName",
                className:" border border-gray text-left pl-2",
                child:item.taskName
            }),
            El({
                element:"td",
                className:" border border-gray py-2",
                child:El({
                    element:"span",
                    id:"priority",
                    className:  `${priority[item.priority]}`,
                    child:item.priority
                })
            }), El({
                element:"td",
                className:" border border-gray",
      
                child:El({
                    element:"span",
                    id:"status",
                    className:`${status[item.status]}`,
                    child:item.status
                })
            }),El({
                element:"td",
                className:" border border-gray",
           
                child:El({
                    element:"span",
                    id:"day",
                    className:"border border-blue py-1 px-2 rounded-2xl",
                    child:item.day
                })
            }),El({
                element:"td",
                className:"border border-gray flex justify-center py-3 items-center gap-2",
                child:[
                    El({
                        element:"span",
                        className:"bg-red rounded-sm p-1 text-wite",
                        innerHTML:svgs.deleteIcon,
                          onclick:(e) => {deleteHandel(e)}
                    }),El({
                        element:"span",
                        className:"bg-blue rounded-sm p-1 text-wite",
                        innerHTML:svgs.editIcon,
                          onclick:(e) => {editHandel(e)}
                    }),El({
                        element:"span",
                        className:"bg-gray  rounded-sm p-1 text-wite",
                        innerHTML:svgs.showIcon,
                           onclick:(e) => {showing(e)}
                    })
                ]
            }),
        
        ]

    })
    tbody.append(row)
   }

    )
}

}
