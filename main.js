const Http = new XMLHttpRequest()

const url='https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

Http.open("GET", url ,false);

Http.onreadystatechange = () => {
    if(Http.readyState === 4 && Http.status === 200) {
        const response = JSON.parse(Http.responseText)
        
        let output = ''

        for(let i=0; i < response.length; i++) {
            output += `<div class="card" style="width: 18rem;">
            <img src="${response[i].thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${response[i].title}</h5>
            <a href="#" class="btn btn-primary" onclick="showModal('${response[i].url}')">View Image</a>
            </div>
        </div>
        `
        }
        document.querySelector('#container').innerHTML = output
    }
}

Http.send()

