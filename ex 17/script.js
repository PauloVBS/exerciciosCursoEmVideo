function multiplicar(){
    //definir variáveis
    let numero= document.getElementById('num').value;
    let numer = parseInt(numero)
    let res = document.getElementById('res')
    // definir o que vai aparecer na página
    res.innerHTML = `${numer}x1=${numer}<br>
    ${numer}x2=${numer*2}<br>
    ${numer}x3=${numer*3}<br>
    ${numer}x4=${numer*4}<br>
    ${numer}x5=${numer*5}<br>
    ${numer}x6=${numer*6}<br>
    ${numer}x7=${numer*7}<br>
    ${numer}x8=${numer*8}<br>
    ${numer}x9=${numer*9}<br>
    ${numer}x10=${numer*10}<br>
    `

}