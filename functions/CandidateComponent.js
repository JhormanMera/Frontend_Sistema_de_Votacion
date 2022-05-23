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

        
    }  
    
}