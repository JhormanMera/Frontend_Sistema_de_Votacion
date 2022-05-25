class CandidateComponent{

    constructor(candidate){
        this.candidate=candidate;
    }

    render(container){
        let html = `
            <div class="card text-center" style="width: 24rem;">
            <img src="${this.candidate.presidentImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><b> PRESIDENTE</b><br>${this.candidate.president}</h5>
            <p class="card-subtitle mb-2 text-muted"><b> VICEPRESIDENTE</b><br> ${this.candidate.formula}</p>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        `;


        if (this.candidate.president=="VOTO EN BLANCO"){
            html = `
            <div class="card text-center" style="width: 25rem;">
            <img src="${this.candidate.presidentImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title align-center">VOTAR EN BLANCO</h5>
            <br>
            <br>
            <br>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        `;
        }
        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.candidate.id}`);
        button.addEventListener('click',this.action.bind(this)); 
    }

    action=async(event)=>{
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        let url = `http://localhost:8080/Backend_Sistema_de_Votacion/Elecciones/Votacion/Actualizar`;
        xhr.open('PUT',url);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(this.candidate));

        window.alert('Voto registrado');
        //window.location.href = "results.html";
    }    
}