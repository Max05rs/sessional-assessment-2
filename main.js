const Http = new XMLHttpRequest()

const url='https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

Http.open("GET", url ,false);

Http.onreadystatechange = () => {
    if(Http.readyState === 4 && Http.status === 200) {
        const response = JSON.parse(Http.responseText)
        
        let output = ''

        for(let i=0; i < response.length; i++) {
            output += `<img src="${response[i].url}" />`
        }
        document.querySelector('#container').innerHTML = output
    }
}

Http.send()

