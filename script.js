const addbtn=document.querySelector('#address')
const addbtnclose=document.querySelector('#add-close')
const rightbnt= document.querySelector('.fa-chevron-right')
const lefttbnt= document.querySelector('.fa-angle-left')
const imgnum= document.querySelectorAll('.conten-left-top img')
const imgslide= document.querySelectorAll('.content-left-bottom li')


const formregisbtn=document.querySelector('#form-regis')
const formregisbtnclose=document.querySelector('#form-regis-close')


let index=0
addbtn.addEventListener("click",function(){
    document.querySelector('.address').style.display="flex"
})
addbtnclose.addEventListener("click",function(){
    document.rambtnquerySelector('.address').style.display="none"
})
rightbnt.addEventListener("click",function(){
    index+=1
    if(index>imgnum.length-1){
        index=0
    }
   document.querySelector(".conten-left-top").style.right =index* 100+"%"
   removeactive()
    imgslide[index].classList.add("active")
})
lefttbnt.addEventListener("click",function(){ 
    index=index-1
    if(index<0){
        index=imgnum.length-1
    }
    
    document.querySelector(".conten-left-top").style.right =index* 100+"%"
    removeactive()
    imgslide[index].classList.add("active")
 })
 imgslide.forEach(function(image,index){
     image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".conten-left-top").style.right =index* 100+"%"
        image.classList.add("active")   
    })  
 })
 function removeactive(){
    let imgactive=document.querySelector('.active')
    imgactive.classList.remove("active")
 }
 function imgauto(){
     index +=1
     if(index>imgnum.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".conten-left-top").style.right =index* 100+"%"
    imgslide[index].classList.add("active")
 }
 setInterval(imgauto,5000)

 const rightbntcontent= document.querySelector('.fa-chevron-right-content')
 const lefttbntcontent= document.querySelector('.fa-angle-left-content')
 const imgnumcontent= document.querySelectorAll('.product-content-items ')
 rightbntcontent.addEventListener("click",function(){
    index+=1
    if(index>imgnumcontent.length-1){
        index=0
    }
    
   document.querySelector(".product-content-items-content").style.right =index* 100+"%"
   removeactive()
    imgslide[index].classList.add("active")
})
lefttbntcontent.addEventListener("click",function(){ 
    index=index-1
    if(index<0){
        index=imgnumcontent.length-1
    }
    document.querySelector(".product-content-items-content").style.right =index* 100+"%"
    removeactive()
    imgslide[index].classList.add("active")
 })
 formregisbtn.addEventListener("click", function(){
    document.querySelector('.form-regis').style.display = "flex"
    
})
formregisbtnclose.addEventListener("click", function(){
    document.querySelector('.form-regis-close').style.display = "none"
    
})
 


