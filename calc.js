historydata=0;
resultdataa=0;
function addexp(inputdata){
    var a=document.getElementById("inputexpression");
    a.value=a.value+inputdata;
}
function solve(){
    //alert(historydata);
    var a=document.getElementById("inputexpression");
    if ((/^[0-9+-/*^]+$/).test(a.value)) {    
        var datainput=a.value.replace("^","**");  
        if(datainput.length>15){
            alert("input shout not more than 15 length");
        }
        else{
            var node = document.createElement('li');
            node.style.color="black";
            node.style.listStyleType="none";
            
            if(historydata>8){
                let listdata=document.getElementById("listid");
                // alert(listdata.lastElementChild.innerHTML);
                listdata.removeChild(listdata.lastElementChild);
                historydata=8;
                // alert();
            }
            document.getElementById("listid").insertBefore(node,document.getElementById("listid").childNodes[0]);
            var resultdata=document.getElementById("answer");
            resultdata.value=eval(datainput);
            resultdataa=resultdata.value;
            historydata+=1;
            node.appendChild(document.createTextNode(a.value+"="+resultdataa));
}
    }
    else{
        alert("contain invalid digit .")
        cleardata();
    }
}
function cleardata(){
    historydata=0;
    var a=document.getElementById("inputexpression");
    a.value="";
    document.getElementById("answer").value="";
}
function historydelete(){
    let listdata=document.getElementById("listid");
    listdata.innerHTML="";
}
