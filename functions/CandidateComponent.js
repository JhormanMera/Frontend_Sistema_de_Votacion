class CandidateComponent{

    constructor(candidate){
        this.candidate=candidate;
    }

    render(container){
        let html=`
        
        `;
        
        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.candidate.id}`);
        button.addEventListener('click', this.action.bind(this));

    }

    action(event){
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('PUT','***************************************************************');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(this.candidate) );
        window.alert('Voto registrado exitosamente');
        window.location.href = "results.html";
    }

    /* action(event){
        event.preventDefault();
        let url = `*********************************************************`;
        fetch(url, {method:'PUT'})
        .then(response => response.json())
        .then(data => {
            alert('Voto registrado exitosamente');
            window.location.href = "results.html";
        })
        .catch(error => console.log(error));
    }*/
}