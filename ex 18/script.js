    
    let numero = document.getElementById('numero')
    let list = document.getElementById('lista')
    let res = document.getElementById('res')
    let listinha=[]
    
    function isnumber(n){
        if(Number(n)>=1 && Number(n)<=100){
            return true
        }else{
            return false
        }
        }
    function inlista(n,l){
        if (l.indexOf(Number(n))!= -1){
            return true
        }else{
            return false
        }

    }

    function Inserir(){
        if (isnumber(numero.value) && !inlista(numero.value , listinha)){
            listinha.push(Number(numero.value))
            let item =  document.createElement('option')
            item.text = `Valor ${numero.value} adicionado.`
            list.appendChild(item)
            res.innerHTML = ''
        }else{
            window.alert('valor inválido ou já encontrado na lista')
        }
        numero.value=''
        numero.focus()
    }

    function Finalizar(){
        if (listinha.length==0){
            window.alert("Adicione valores!")
        }else{
            let total = listinha.length
            let maior = listinha[0]
            let menor = listinha[0]
            let soma = 0
            let media= 0

            for (let pos in listinha ){
                soma += listinha[pos]
                if (listinha[pos]>maior)
                maior = listinha[pos]
                if (listinha[pos]<menor)
                menor= valores[pos] 
                       }
                       media= soma/total
            res.innerHTML= ''
            res.innerHTML+= `<p>Ao todo temos ${total} números cadastrados</p>`        
            res.innerHTML+= `<p>O maior valor informado foi ${maior}</p>`
            res.innerHTML+= `<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML+= `<p>A soma dos valores é ${soma}`
            res.innerHTML+= `<p>A média de ${media}</p>`
        }
    }
