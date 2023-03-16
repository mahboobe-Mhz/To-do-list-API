
import { hiddenLoading } from '../loadingfunc'
import { Render } from '../render'

let isEditing =false
let selectValue={}
let objData
let state=[]
let editId=''
let Url='http://localhost:3000/task'
let page =1
 //-----------------------------------------posting data-----------------------------------
 async function post(data){
  const request = await fetch('http://localhost:3000/task', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
      }
    })
   const res= await request.json()
    return res
 }

 //-----------------------------------------get ing data-----------------------------------

async function get() {
  try{
    const data2 =await fetch('http://localhost:3000/task')
    objData= await data2.json()
   Render(objData) 
   hiddenLoading()
   return objData
  }catch(err){
    console.log("yor error is :"+err);
  }
 }
get()
//-----------------------------------------submitForm-----------------------------------
 export  const handleSubmitForm =async (e)=>{
    e.preventDefault()
    if(isEditing==false){
      const form =document.getElementById("form")
    const data= {
        id:Date.now(),
        taskName:form.taskName.value,
        priority:form.priority.value,
        status:form.status.value,
        day:form.day.value,
        textArea:form.textArea.value
    }
    await post(data)
     Render(await get()) 
    e.target.closest("section").classList.add("invisible")
    form.reset()
    //-----------------------------------------editForm-----------------------------------
}else if(isEditing==true){

state =state.map(item => {
      if(item.id == +editId)  {
        const form =document.getElementById("form")
        item.taskName =form.taskName.value
        item.priority =form.priority.value
        item.status = form.status.value
        item.day =form.day.value
        item.textArea =form.textArea.value
         editData(item)
      }return item

    })
    isEditing=false
   form.closest("section").classList.add("invisible")
    e.target.parentElement.parentElement.reset()
  //-----------------------------------------showingForm-----------------------------------
}else{
  form.closest("section").classList.add("invisible")
  isEditing=false
}

}
//-----------------------------------------handel edit icon-----------------------------------
export const editHandel=async(e)=>{

  isEditing= true
const form =document.getElementById("form")
const modal =document.getElementById('modal')
 editId = e.target.closest("tr").id
 state =  await get()
selectValue = state.find(item => item.id == +editId)
 modal.classList.remove("invisible") 
form.taskName.value=selectValue.taskName
form.priority.value=selectValue.priority
form.status.value=selectValue.status
form.day.value=selectValue.day
form.textArea.value=selectValue.textArea
form.save.innerHTML="Edit"
}
//-----------------------------------------handel delete icon-----------------------------------
export const deleteHandel= async (e)=>{
const delId = e.target.closest("tr").id
deleteData(+delId)
}
  
  //-----------------------------------------handel showing icon-----------------------------------
 export const showing=async(e)=>{
  const modal =document.getElementById('modal')
  modal.classList.remove("invisible") 
  editId = e.target.closest("tr").id
  const data=await get()
  selectValue = data.find(item => item.id == +editId)
 const form =document.getElementById("form")
 form.save.innerHTML='showing'
 form.save.enable
 form.save.classList.remove('bg-blue')
 form.save.classList.add('bg-gray')

form.taskName.value=selectValue.taskName,
form.priority.value=selectValue.priority
form.status.value=selectValue.status
form.day.value=selectValue.day
form.textArea.value=selectValue.textArea
isEditing="nothing"

 }

  //-----------------------------------------deleting data-----------------------------------
  async function deleteData(delId){

    const request = await fetch(`http://localhost:3000/task/${+delId}`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
        }
     })
     Render(await get()) 
   }
 //-----------------------------------------edit data-----------------------------------
 async function editData(data){
  const request = await fetch(`http://localhost:3000/task/${+editId}`, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   })
   Render(await get()) 
 }
  //-----------------------------------------handelFilter-----------------------------------
  //---------------------------show filter box-----------
 export  const showFilter=()=>{
const showFilter=document.getElementById("FilterModal")
showFilter.classList.remove("hidden")
 }
 //---------------------------remove filter box ---------
 export const removeFilter=()=>{

const showFilter=document.getElementById("FilterModal")
showFilter.classList.add("hidden")
 
 }
 export const removeFilter2=(e)=>{
  const showFilter=document.getElementById("FilterModal")
   if(e.target.closest("form")) return
    showFilter.classList.add("hidden")
 }
 //------------------------apply filter--------------------
 export const filterNav= async(e)=>{
  const data = await get()
  console.log(e.target.value);
  if(e.target.value === 'All'){
    Render(data)
  }else{
    const filter=data.filter(item=>{
      if(  item.priority == e.target.value ||item.status == e.target.value || item.day == e.target.value ){ return item}
    
    })
Render(filter)
  }
 }

   //-----------------------------------------pagination-----------------------------------
   async function get2(pageNum,dataNum) {
    try{
      const data2 =await fetch(`${Url}?_page=${pageNum}&_limit=${dataNum}`)
      objData= await data2.json()
        return objData
    }catch(err){
      console.log("yor error is :"+err);
    }
   }


   //----------------------nextPage--------------------
   export const pageNext= async()=>{
    const selectPage =document.getElementById("selectPage")
    const tbody= document.getElementById('tbody')
    const span1=document.getElementById("span1")
    const span2=document.getElementById("span2")
    let rows =tbody.childNodes.length
   const numPages=span2.innerHTML

    if(page>=numPages )return
    else{
     ++page
    if(selectPage.value==="All"){
     Render(await get()) 
    }else{
     Render(await get2(page,selectPage.value)) 
    }
  }
  if (page >0) {
    span1.innerHTML=`${page}`
  }
   }
   //---------------------PreviousPage-----------------
   export const pagePrevious= async()=>{
    const selectPage =document.getElementById("selectPage")
 const span1=document.getElementById("span1")
   
   
    if(page==1)return
    else{
      --page
    if(selectPage.value==="All"){
     Render(await get()) 
    }else{
     Render(await get2(page,selectPage.value)) 

    }
  }
  if (page >0) {
    span1.innerHTML=`${page}`
  }
  
   }

   //----------------------------sort by select option-------------
   export const sortSelect =async()=>{
    
    const span2=document.getElementById("span2")
    const tbody= document.getElementById('tbody')
    let rows =tbody.childNodes.length
    const selectPage =document.getElementById("selectPage")
     const rowCounter=Math.ceil( rows/ selectPage.value)
  
    if (rowCounter>=1) {
      span2.innerHTML=`${rowCounter}`
    }else{
      span2.innerHTML=`1`
    }
    if(selectPage.value==="All"){
      Render(await get()) 
     }else{
      Render(await get2(1,selectPage.value)) 
     }
 
   }
   //-----------------------------------search box--------------------------------

export const searching=async(e)=>{
 
  const data=  await get()
 
  const searchBox =document.getElementById('searchBox')
  searchBox.innerHTML=''
  const filter =data.filter((element)=>{
    let lowerCase = element.taskName.toLowerCase();
    return lowerCase.startsWith(e.target.value.toLowerCase())
  })
  Render(filter);
}
