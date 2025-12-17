let inputt=document.getElementById("inputt")
inputt.addEventListener("focus",()=>{
    inputt.style.boxShadow="0px 0px 50px red"
})
inputt.addEventListener("blur",()=>{
    document.body.style.backgroundColor="lightblue";
    inputt.style.boxShadow="0px 0px 0px"
})