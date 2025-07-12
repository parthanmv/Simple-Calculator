function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}


 function clearDisplay(){
  document.getElementById("screen").value="";
  document.getElementById("result").value="";
 }
 
 function clickEqual(){
   var text= document.getElementById("screen").value
   var res =eval(text)
   document.getElementById("result").value=res
 }

funtion