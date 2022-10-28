const createEle = (eleType,eleText,eleClass,eleParent,eleId)=>{
    const para = document.createElement(eleType);
    para.innerHTML = eleText;
    para.className = eleClass;
    const par = document.getElementById(eleParent);
    par.appendChild(para)

}

const btn = document.getElementById("btns");

window.addEventListener("keydown",(event)=>{
   ascCode(event.key);
   console.log(event.location);
})
const ascCode = (x)=>{
    console.log(x);
    const a = String.fromCharCode(x);
    console.log(a);
}
const main =()=>{
    createEle("h1","WElcome","csssty","txt");
//     document.addEventListener('keydown', (e) => {
//     e = e || window.event;
//     if(e.key == "F5"){
//         e.preventDefault();
//     }
// })
    
}
main();
