// changeHandle=()=>{
//     data=document.getElementById("input").value;
//     document.getElementById("Heading").innerHTML=data;
//     // document.getElementById("Heading").setAttribute=("style","color:blue;");
// }


document.getElementById("i1");
document.getElementById("i2");
document.getElementById("res");
input=()=>{
if(isNaN(document.getElementById("i1").value)){
alert("It's not a number");
}
if(isNaN(document.getElementById("i2").value))
{
alert("It's not a number");
}
}

sum=()=>{
    sum1=parseFloat(document.getElementById("i1").value)+parseFloat(document.getElementById("i2").value);
    document.getElementById("res").innerHTML=sum1;
}
sub=()=>{
    sum1=(document.getElementById("i1").value)-(document.getElementById("i2").value);
    document.getElementById("res").innerHTML=sum1;
}
product=()=>{
    sum1=(document.getElementById("i1").value)*(document.getElementById("i2").value);
    document.getElementById("res").innerHTML=sum1;
}
modulo=()=>{
    sum1=(document.getElementById("i1").value)%(document.getElementById("i2").value);
    document.getElementById("res").innerHTML=sum1;
}
divide=()=>{
    sum1=(document.getElementById("i1").value)/(document.getElementById("i2").value);
    document.getElementById("res").innerHTML=sum1;
}