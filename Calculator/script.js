let input=document.getElementById('input-box');
let buttons=document.querySelectorAll('button');
let history=document.getElementById('history');

let string= "";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            history.value=string;
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string= "";
            input.value=string;
            history.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    })
    
});