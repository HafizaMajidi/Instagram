// async function includeHTML() {
//     let includeElements = document.querySelectorAll('[w3-include-html]');
//     for (let i = 0; i < includeElements.length; i++) {
//         const element = includeElements[i];
//         file = element.getAttribute("w3-include-html"); // "includes/header.html"
//         let resp = await fetch(file);
//         if (resp.ok) {
//             element.innerHTML = await resp.text();
//         } else {
//             element.innerHTML = 'Page not found';
//         }
//     }
// }

let posts = [{ 
        'name': 'Diana',
        'image': 'img/hijab.jpg',
        'icon': 'img/herz-icon.png',
        'comments' : ['Gefällt 1000 Mal <br> Diana ']
    },
    { 
        'name': 'David',
        'image': 'img/people.jpg',
        'icon': 'img/herz-icon.png',
        'comments' : ['Gefällt 150 Mal <br> David Punkt.']
    },
    { 
        'name': 'Sarah',
        'image': 'img/yoga.jpg',
        'icon': 'img/herz-icon.png',
        'comments' : ['Gefällt 40 Mal <br> Sarah  Punkt']
    },
]

function render(){
    document.getElementById('content').innerHTML = '';
    
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
            document.getElementById('content').innerHTML +=`
            
        <div class="main">
      
            <div class="name">${post['name']}</div>
            <img class="image"src= "${post['image']}"> <br>
            <img class="heart-icon" src="${post['icon']}">
            <img class="icon" src="./img/icon-comment.png" alt="">
            <img class="icon" src="./img/icon-sent.png" alt="">
            <div id="postcomment${i}"> </div>
            <input placeholder="Alle Kommentare ansehen"> <br>
            <input id="input${i}" placeholder="Kommentieren ..."><button class="postbutton" onclick="addPost(${i})">Posten</button>
        <hr>
        </div>
        `;
        

        let postcomment = document.getElementById(`postcomment${i}`);

        for (let j = 0; j < post['comments'].length; j++){
            const comment = post['comments'][j];
            postcomment.innerHTML += `<div>${comment}</div>`;
        }
    }
}
function renderStoris(){

}

function addPost(index){
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);

    render();
    index.innerHtml ='';

}