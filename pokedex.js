var varMov;
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch (url).then((res) => {
        if (res.status != "200"){
            restaurar();
            pokeImage("./assets/no.gif")
        }
        else{
            return res.json();
        }
    }).then((data) => {
        varMov = data;
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        pokeEstadisticas(data);
        movimientos(data);
    })
}


const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeEstadisticas = (pokeInput) => {
    const nombre = document.getElementById("pokeNombre");
    const tipo = document.getElementById("tipo");
    let tipoPoke = "";
    const ps = document.getElementById("PS");
    const psBar = document.getElementById("PS-BAR");
    const at = document.getElementById("AT");
    const atBar = document.getElementById("AT-BAR");
    const df = document.getElementById("DF");
    const dfBar = document.getElementById("DF-BAR");
    const esAt = document.getElementById("ES-AT");
    const esAtBar = document.getElementById("ES-AT-BAR");
    const esDf = document.getElementById("ES-DF");
    const esDfBar = document.getElementById("ES-DF-BAR");
    const vel = document.getElementById("VL");
    const velBar = document.getElementById("VL-BAR");
    for (i = 0; i<pokeInput.types.length; i++){
        tipoPoke = tipoPoke + pokeInput.types[i].type.name+" ";
    }
    nombre.textContent = pokeInput.name;
    tipo.textContent = tipoPoke;
    ps.textContent = pokeInput.stats[0].base_stat;
    psBar.ariaValueNow = pokeInput.stats[0].base_stat;
    psBar.style.width = pokeInput.stats[0].base_stat+"%";
    at.textContent = pokeInput.stats[1].base_stat;
    atBar.ariaValueNow = pokeInput.stats[1].base_stat;
    atBar.style.width = pokeInput.stats[1].base_stat+"%";
    df.textContent = pokeInput.stats[2].base_stat;
    dfBar.ariaValueNow = pokeInput.stats[2].base_stat;
    dfBar.style.width = pokeInput.stats[2].base_stat+"%";
    esAt.textContent = pokeInput.stats[3].base_stat;
    esAtBar.ariaValueNow = pokeInput.stats[3].base_stat;
    esAtBar.style.width = pokeInput.stats[3].base_stat+"%";
    esDf.textContent = pokeInput.stats[4].base_stat;
    esDfBar.ariaValueNow = pokeInput.stats[4].base_stat;
    esDfBar.style.width = pokeInput.stats[4].base_stat+"%";
    vel.textContent = pokeInput.stats[5].base_stat;
    velBar.ariaValueNow = pokeInput.stats[5].base_stat;
    velBar.style.width = pokeInput.stats[5].base_stat+"%";
}

const movimientos = (movimientos) =>{
    const tMov = document.getElementById("T-MOV");
    const rMov1 = document.getElementById("R-MOV-1");
    const rMov2 = document.getElementById("R-MOV-2");
    const mov = document.getElementById("MOV");
    tMov.textContent = tMov.textContent + " "+movimientos.moves.length;
    rMov1.textContent = ` 1`;
    rMov2.textContent =movimientos.moves.length
    mov.textContent = movimientos.moves[0].move.name;
}

const movSiguiente = () =>{
    const rMov = document.getElementById("R-MOV-1");
    const mov = document.getElementById("MOV");
    try{
        if (rMov.textContent < varMov.moves.length){
            rMov.textContent = parseInt(rMov.textContent)+1;
            mov.textContent = varMov.moves[rMov.textContent].move.name;
        }
    }
    catch (error) {
        console.log("No hay mas movimientos");
    }   
}

const movAnterior = () =>{
    const rMov = document.getElementById("R-MOV-1");
    const mov = document.getElementById("MOV");
    try{
        if (rMov.textContent > 1){
            rMov.textContent = parseInt(rMov.textContent)-1;
            mov.textContent = varMov.moves[rMov.textContent].move.name;
        }
    }
    catch (error1) {
        console.log("No hay mas movimientos");
    }
}

const cambiarInput = () =>{
    const pokeName = document.getElementById("pokeName");
    const selectNombre = document.getElementById("radioNombre");
    let sNombre = selectNombre.checked;
    const selectNumero = document.getElementById("radioNumero");
    let sNumero = selectNumero.checked;
    if (sNombre == true){
       pokeName.type = "text"; 
    } 
    else if (sNumero == true){
        pokeName.type = "number";
    }
}

const restaurar = () =>{
    const img = document.getElementById("pokeImg");
    const nomb = document.getElementById("pokeNombre");
    const tipo = document.getElementById("tipo");
    const ps = document.getElementById("PS");
    const psBar = document.getElementById("PS-BAR");
    const at = document.getElementById("AT");
    const atBar = document.getElementById("AT-BAR");
    const df = document.getElementById("DF");
    const dfBar = document.getElementById("DF-BAR");
    const esAt = document.getElementById("ES-AT");
    const esAtBar = document.getElementById("ES-AT-BAR");
    const esDf = document.getElementById("ES-DF");
    const esDfBar = document.getElementById("ES-DF-BAR");
    const vel = document.getElementById("VL");
    const velBar = document.getElementById("VL-BAR");
    const tMov = document.getElementById("T-MOV");
    const rMov1 = document.getElementById("R-MOV-1");
    const rMov2 = document.getElementById("R-MOV-2");
    const mov = document.getElementById("MOV");
    varMov = "";
    img.src = "./assets/pokebola.png";
    nomb.textContent = "";
    tipo.textContent = "";
    ps.textContent = "";
    psBar.ariaValueNow = 0;
    psBar.style.width = "0%";
    at.textContent = "";
    atBar.ariaValueNow = 0;
    atBar.style.width = "0%";
    df.textContent = "";
    dfBar.ariaValueNow = 0;
    dfBar.style.width = "0%";
    esAt.textContent = "";
    esAtBar.ariaValueNow = 0;
    esAtBar.style.width = "0%";
    esDf.textContent = "";
    esDfBar.ariaValueNow = 0;
    esDfBar.style.width = "0%";
    vel.textContent = "";
    velBar.ariaValueNow = 0;
    velBar.style.width = "0%";
    tMov.textContent = "Total de movimientos: ";
    rMov1.textContent = " ";
    rMov2.textContent = " ";
    mov.textContent = " ";
}