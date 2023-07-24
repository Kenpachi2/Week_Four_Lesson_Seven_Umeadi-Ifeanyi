const hisFirstName = document.getElementById("form1").fname.value
const hisLastName = document.getElementById("form1").lname.value


function getFormvalue(){
    // const para = document.createElement("p");
    // const node = document.createTextNode(hisFirstName + hisLastName);
    
    // para.appendChild(node)
    // const formation = document.getElementById("append").innerHTML
    //  formation.appendChild(para)
    let fullName = `Your name is ${hisFirstName} ${hisLastName}`;
    document.write(fullName);
    alert(fullName)

    function printName(){
        
    }


}