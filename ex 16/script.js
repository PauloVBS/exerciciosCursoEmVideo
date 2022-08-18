//variáveis
function calculo(){
let inicio = document.getElementById('inicio').value;
let resultado = document.getElementById('resultado');
let final = document.getElementById('final').value;
let passo = document.getElementById('passo').value;
let inicionum= parseInt(inicio)
let finalnum= parseInt(final)
let passonum= parseInt(passo)
if (passo=0){window.alert('O passo é igual a 0 portanto ele vai ficar parado!')
}else{
    if (final>inicio){
    let lista = ''
            for (let c = inicionum+passonum;c<=finalnum;c=c+passonum){
            lista= `${lista} &#128073 ${c}` ;
    }
    resultado.innerHTML = `${inicio}${lista}&#127987`
}else if(final<inicio){
    let lista = ''
            for (let c = inicionum-passonum;c>=finalnum;c=c-passonum){
            lista= `${lista} &#128073 ${c}` ;
    }
    resultado.innerHTML = `${inicio}${lista}&#127987`

}else if(final=inicio){
    window.alert("O início e o final são iguais!!")

}
}
}