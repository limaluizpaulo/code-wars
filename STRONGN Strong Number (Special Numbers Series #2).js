let n = 2
let novo = n


var unidade = parseInt(n % 10)
n = parseInt(n / 10)
var dezena = parseInt(n % 10)
n = parseInt(n / 10)
var centena = parseInt(n % 10)
n = parseInt(n / 10)
var milhar = parseInt(n % 10)
n = parseInt(n / 10)
var dezmilhar = parseInt(n % 10)


let mf = 1
let df = 1
let cf = 1
let uf = 1
let dm = 1

if(unidade==0){uf=0}
if(dezena==0 & centena==0 & milhar==0 & dezmilhar==0){df=0}
if(centena==0 & milhar==0 & dezmilhar==0){cf=0}
if(milhar==0 & dezmilhar==0){mf=0}
if(dezmilhar==0){dm=0}

 while(milhar > 1) {
     mf *= milhar
     milhar--
 }

 while(centena > 1) {
    cf *= centena
    centena--
}

while(dezena > 1) {
    df *= dezena
    dezena--
}

while(unidade > 1) {
    uf *= unidade
    unidade--
}

while(dezmilhar > 1) {
    dm *= dezmilhar
    dezmilhar--
}

nf = uf + cf + df + mf + dm


 if(novo==nf){
     console.log("STRONG!!!!")
    
 } else {
     console.log("Not Strong !!")
 }

 console.log(dm,mf,cf,df,uf)

 console.log(nf)