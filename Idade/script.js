res.style.textAlign = 'center'
function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value > ano){
        window.alert('Koé zé ruela zoa não bota o ano na moral ai')
    }else if (fano.value == 0){
        window.alert('Tem que botar o ano naquela caixinha ali embaixo ó')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '200px'
        img.style.height = '200px'
        if (fsex[0].checked){
            var genero = "Um Homem"
            if (idade >= 0 && idade <= 14) {
                //kid
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //jovirone
                img.setAttribute('src', 'foto-jovem-m.png' )
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else {
            var genero = "Uma Mulher"
            if (idade >= 0 && idade <= 14) {
                //kid
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 21){
                //jovirone
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} com ${idade} anos de idade</p>`
        res.appendChild(img)
}
