var input1=document.querySelector("#input1_id");
var input2=document.querySelector("#input2_id");
var btn2=document.querySelector("#btn2_id");
var ans=document.querySelector("#answer");

btn2.addEventListener("click", function(){
    ans.innerHTML=parseInt(input1.value) * parseInt(input2.value);
});

