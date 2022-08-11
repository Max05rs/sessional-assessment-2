const Http = new XMLHttpRequest()

const url='https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

Http.open("GET", url ,false);

Http.onreadystatechange = () => {
    if(Http.readyState === 4 && Http.status === 200) {
        const response = JSON.parse(Http.responseText)
        
        let output = ''

        for(let i=0; i < response.length; i++) {
            output += `<div class="card" style="width: 18rem;">
            <a  href=${response[i].url} target="_blank"><img src="${response[i].thumbnailUrl}" class="card-img-top" alt="..."></a>
        </div>
        `
        }
        document.querySelector('#container').innerHTML = output
    }
}

Http.send()

function post(e){
    e.preventDefault()
   const output = `<div class="card size" style="width: 18rem;">
    <a  href=${document.getElementById("url").value} target="_blank"><img src="${document.getElementById("ThumbnailUrl").value}" class="card-img-top size" alt="..."></a>
</div>
`
document.querySelector('#container').innerHTML+=output;
}