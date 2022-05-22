const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

async function catchJson(){
    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food');
    const food = await response.json();
    
    food.forEach(Food => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = Food.name;

        const image = document.createElement('img');
        image.src = Food.imageUrl;
  
        const p = document.createElement('p');
        p.textContent = Food.price + " KM";

        container.appendChild(card);

        card.appendChild(h1);
        card.appendChild(image);
        card.appendChild(p)
        });
}


fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {

    method: "POST",
     
    body: JSON.stringify({
        "id": 0,
    	"name": "string",
        "price": 0,
        "imageUrl": "string"
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(json => console.log(json));


fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {

    method: "PUT",
     
    body: JSON.stringify({
        "id": 0,
        "name": "string",
        "price": 0,
        "imageUrl": "string"
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(json => console.log(json));


const deleteData = async ( ) =>{
    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {
        method: 'DELETE', 
        body: JSON.stringify({
            "id": "integer"
        }),
         
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
  
    console.log(json);
 };
 deleteData( );

catchJson();

