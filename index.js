// 
const tbody = document.querySelector("tbody");

const getUsers = async function () {
    let response = await fetch('http://localhost:3000/userData');
    let datas = await response.json();
    console.log(datas[0])

    for (let i = 0; i < datas.length; i++) {
        tbody.innerHTML += 
                `<tr>
                    <td>${datas[i].nom}</td>
                    <td>${datas[i].adress}</td>
                    <td>${datas[i].statut}</td>
                    <td class ="${datas[i].signal}" >${datas[i].signal} </td>
                    <td>${ datas[i].date}</td>
                </tr>`;

        
        
    }

    
}
getUsers()
//////////////////////////
// ajouter dans la base 

const nom    = document.getElementById('nom');
const adress = document.getElementById('adress');
const statut = document.getElementById('statut');
const signal = document.getElementById('signal');
const dateDay = document.getElementById('date');
const form =document.querySelector('form');




form.addEventListener('submit',()=>
    {
        console.log(nom.value)
    
   

    const init = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({

            nom :  nom.value,
            adress : adress.value,
            statut : statut.value,
            signal : signal.value,
            date : dateRepresent


            }),               
    
       
        mode : "cors",
        credentials : "same-origin",
    };
    
    
        fetch("http://localhost:3000/userData",init)
            .then(()=> console.log("data ajouté"));
    
})

// selection en fonction de la couleur de selection
let date = new Date();
console.log(Date.now(date) );
console.log(date);

let dateNow = Date.now();
console.log(dateNow)

console.log(date.getDate()+"/"+date.getMonth()+ "/"+date.getFullYear()+"  "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

let dateRepresent = date.getDate()+"/"+date.getMonth()+ "/"+date.getFullYear()+"  "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()



let bonjour
