function carregar(){
  var txt = window.document.getElementById('txt')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
txt.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ){
    //Bom dia
    imagem.src= 'oie_SKSasCx2Ieqw.png'
    document.body.style.background="#FFD700"
}else if (hora>=12 && hora <18) {
//Boa Tarde!
    imagem.src='oie_Ez7NclpsyojE.png'
    document.body.style.background="#F0E68C"

}else{
    //Boa noite!
    imagem.src='oie_iAIoKOd5FkN9.png'
    document.body.style.background="#191970"
    

}
}
