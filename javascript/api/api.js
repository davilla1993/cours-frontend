
 const liste = document.querySelector('.liste');
// const btn = document.querySelector('.btn');
// const xhr = new XMLHttpRequest();

// btn.addEventListener('click', () =>{
    
//     xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
    
//     dataType='json';
    
//     xhr.onload = function() {
        
//         console.log(data)


//         for(i = 0; i< data.length; i++) {
            
//             let newLi = document.createElement('li');
//             let newTitreCarte = document.createElement('h2');
//             let newBodyCarte = document.createElement('p');

//             newTitreCarte.innerText = data[i].title;
//             newBodyCarte.innerText = data[i].body;

//             newLi.appendChild(newTitreCarte);
//             newLi.appendChild(newBodyCarte);
//             liste.appendChild(newLi);
//         }

//     }
    
//     xhr.send();

// })


fetch('http://jsonplaceholder.typicode.com/posts')
.then(response=> response.json())
.then(data=>  {

    for(i = 0; i< data.length; i++) {
            
        let newLi = document.createElement('li');
        let newTitreCarte = document.createElement('h2');
        let newBodyCarte = document.createElement('p');

        newTitreCarte.innerText = data[i].title;
        newBodyCarte.innerText = data[i].body;

        newLi.appendChild(newTitreCarte);
        newLi.appendChild(newBodyCarte);
        liste.appendChild(newLi);
    }

});
    
    