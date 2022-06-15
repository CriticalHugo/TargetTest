const frase = "Bom Dia!";
var fraseInvertidaArr = [], contador = frase.length, fraseInvertidaStr = "";

for (let caractere of frase) {

    fraseInvertidaArr[contador - 1] = caractere;
    
    contador--;

}

for (let caractere of fraseInvertidaArr) {

    fraseInvertidaStr = fraseInvertidaStr + caractere;

}

console.log(fraseInvertidaStr);