const hisFirstName = document.getElementById("form1").fname.value
const hisLastName = document.getElementById("form1").lname.value
const form = document.getElementById('form1')
let fullName = `Your name is ${hisFirstName} ${hisLastName}`;
let destination = document.getElementById('destination')


// function printName(){
//     let namePlace = document.createElement('p');
//     namePlace.innerText = fullName

//     destination.appendChild(namePlace)
// }


function getFormvalue(){
    // para.appendChild(node)
    // const formation = document.getElementById("append").innerHTML
    //  formation.appendChild(para)
    console.log(fullName);
    // alert(fullName)
    const para = document.createElement("p");
    para.innerText = fullName
    destination.appendChild(para)
    
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

