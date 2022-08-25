let screen=document.getElementById("screen");
let buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let btext=e.target.innerText;
        console.log('button text is ',btext);
        if(btext=='X'){
            btext="*";
            screenvalue+=btext;
            screen.value=screenvalue;
        }
        else if(btext=="C"){
            screenvalue="";
            screen.value=screenvalue;
        }
        else if(btext=='=')
        {
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=btext;
            screen.value=screenvalue;
        }
    })
}