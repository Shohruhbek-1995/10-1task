 var myForm=document.querySelector(".myForm")
 var inputText=document.querySelector(".myInput");
 var btnEl =document.getElementsByTagName("button");
 var appenga =document.querySelector(".appen");

 
 let arr=[];
myForm.addEventListener('submit' ,function(event){
    event.preventDefault();

    arr.push(inputText.value);
    inputText.value="";
    renderUsers(arr );

    
}) 
renderUsers(arr);
function renderUsers(u){
    appenga.innerHTML=null;
    for(let i=0;i<arr.length;i++){
        let listItem=document.createElement('li');
        listItem.className="p-2 list-group-item";
        listItem.textContent=u[i];
        appenga.appendChild(listItem);
        
    }
}