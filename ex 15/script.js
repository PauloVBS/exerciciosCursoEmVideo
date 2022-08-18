function verificar(){
    let data =  new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('verifique os dados!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano  - Number(fano.value)
        let genero= ''
        let img = document.createElement('img')
        img.setAttribute('id','foto' )
        if (fsex[0].checked){
            genero= 'Homem'
             if (idade <=5){
             img.setAttribute('src','bebemenino.png')
             }else if(idade<=13){
                img.setAttribute('src','meninocrianca.png')
             }else if(idade<=18){
                img.setAttribute('src','adolescentehomem.png')
             }else if(idade<=60){
                img.setAttribute('src','adultohomem.png')
             }else{
                img.setAttribute('src','idosohomem.png')
             }
        }else{
            genero= 'Mulher'
            if (idade <=5){
                img.setAttribute('src','bebemenina.png')
            }else if(idade<=13){
                img.setAttribute('src','meninacrianca.png')
            }else if(idade<=18){
                img.setAttribute('src','adolescentemulher.png')
            }else if(idade<=60){
                img.setAttribute('src','adultamulher.png')
            }else{
                img.setAttribute('src','idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}