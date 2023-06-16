{
/* Ex 1: Set + algoritmi
crea una funzione che prende in ingresso due set di 5 parole e restituisce la differenza tra il
numero di parole aventi lunghezza pari presenti nel primo set e il numero di parole che terminano
in 'a' presenti nel secondo set.
chiamare la funzione con valori a piacere per stampare il risultato.
 */


let Set1 = new Set(["cara", "prisma", "ciclo", "panna", "ristorante"]);
let Set2 = new Set(["casta", "carta", "pasta", "carpa", "pere"])

function diff (set1, set2){
    let counterEven = 0
    let counterLastA = 0
    for (const word of set1) {
      if (word.length % 2 == 0) {
        counterEven++;
      }
    }
    for (const word of set2) {
      if (word[word.length - 1] == "a") {
        counterLastA++;
      }
    }
 let differenza = counterEven - counterLastA
 console.log(differenza)
}

diff(Set1,Set2)
}
//finito


{
/* Ex 2: Funzioni + array + oggetti + algoritmi
Scrivi una funzione che prenda in input un array di 3 oggetti rappresentanti persone (nome,
cognome, età) e restituisca un nuovo array contenente le 3 persone ordinate per età crescente
(dal più giovane al più anziano).
Chiamare la funzione per produrre l'array, e successivamente iterare su questo array per stampare
le informazioni di tutte e 3 le persone.
Ad esempio:
dammiPersoneOrdinate ( [ {mario rossi, 32}, {luigi verdi, 25}, {peach pink, 30} ] )
produce: [{luigi verdi, 25}, {peach pink, 30}, {mario rossi, 32}, ] */

let people = [
  {
    nome: "gigio",
    cognome: "pinelli",
    eta: 18,
  },
  {
    nome: "pino",
    cognome: "carino",
    eta: 56,
  },
  {
    nome: "giulio",
    cognome: "cesare",
    eta: 8,
  },
];

function growingOrder(people) {
  let orderedPeople = [];
  for (let i = 0; i < people.length; i++) {
    orderedPeople[i] = people[i];
  }
  for (let i = 0; i < orderedPeople.length - 1; i++) {
    for (let j = i + 1; j < orderedPeople.length; j++) {
      if (orderedPeople[j].eta < orderedPeople[i].eta) {

      }
    }
  }
  return orderedPeople;
}

}

//quasi finito ma non funziona

{
/* ex 3
Crea un array di 6 stringhe a piacere.
Successivamente, crea una mappa che avrà come chiavi le parole contenute nell'array e per valori
le loro lunghezze.
Itera sulla mappa per stampare, per ogni coppia al suo interno, la frase:
la parola … contiene … caratteri */

const arr = ["cammello", "caricatura", "terzo", "mano", "cane", "letto"];

const map = new Map(arr.map (word => [word, word.length]));

map.forEach((length, word) => {
  console.log(`La parola "${word}" contiene ${length} caratteri.`);
});

//finito

}


{
/* Ex 4: date + JSON
Dato il seguente JSON:
{
"date1": "1990-10-10",
"date2": "1980-10-10",
"date3": "1970-10-10",
"date4": "1960-10-10"
}
trova la strategia corretta per stampare in output la data più "piccola" e la data più "grande" tra
quelle fornite */

const json = `{
    "date1": "1990-10-10",
    "date2": "1980-10-10",
    "date3": "1970-10-10",
    "date4": "1960-10-10"
  }`;

  const dateJS = JSON.parse(json)
  const dateArray = Object.values(dateJS)

  let dataMinore = dateArray[0]
  let dataMaggiore = dateArray[0]

  for (let i = 1; i < dateArray.length; i++) {
    if (Date.parse(dateArray[i]) < Date.parse(dataMinore)) {
      dataMinore = dateArray[i]
    }

    if (Date.parse(dateArray[i]) > Date.parse(dataMaggiore)) {
      dataMaggiore = dateArray[i]
    }
  }

  console.log("Data più piccola:", dataMinore)
  console.log("Data più grande:", dataMaggiore)


//finito

}


{
  /* Ex 5: Algoritmi
Data una stringa s a piacere, stampare solo i caratteri univoci, ovvero i caratteri che compaiono
SOLO una volta nella lista.
Ad esempio:
abbazia -> zi */

const string = "esselunga"

  function stampUniqueChar(str) {
    let uniqueChar = "";

    for (let i = 0; i < str.length; i++) {
      let charNumber = str[i];
      let counter = 0;

      for (let j = 0; j < str.length; j++) {
        if (str[j] == charNumber) {
          counter++;
        }
      }

      if (counter == 1) {
        uniqueChar += charNumber;
      }
    }

    console.log(uniqueChar);
  }

stampUniqueChar(string)

//finito

}

//---------MEDIUM---------------

{

/* Ex 1: Array + algoritmi
crea un array di 6 numeri interi e stampa in console la differenza tra il numero di numeri maggiori
di 10 e il numero di numeri inferiori a 1.
Inoltre, se il valore calcolato è pari a 0, stampa tutti i numeri dell'array in senso invertito,
altrimenti, stampa solo il primo e l'ultimo numero dell'array
 */

let arr = [13, 11, 4, -5, 29, -1];
let plusTen = 0;
let minusOne = 0;

arr.forEach(function (num) {
  if (num > 10) {
    plusTen++;
  } else if (num < 1) {
    minusOne++;
  }
});

let diff = plusTen - minusOne;

console.log(diff);

if (diff == 0) {
  console.log(arr.reverse());
} else {
  console.log(arr[0], arr[arr.length - 1]);
}

//finito

}


{
/* Ex 2: Array + funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso due set di 5 numeri e restituisce un oggetto.
Questo oggetto avrà le seguenti proprietà:
winner -> avrà valore 1 se il primo set ha più proprietà del secondo, altrimenti 2, e 0 se hanno
numero pari di proprietà
morePositive: avrà valore 1 se il primo set ha più numeri positivi (> 0) del secondo, altrimenti 2, e 0
se hanno numero pari di proprietà
chiama la funzione per stampare proprietà e valori dell'oggetto restituito */

//saltato

}

{
/*ex 3
crea una funzione che prende in ingresso 2 oggetti che rappresentano due rettangoli, che avranno
questa struttura: {x: valore numerico, y: valore numerico}, e una stringa che può avere i seguenti
valori:
- perimetro
- area
Se il terzo parametro ha valore 'perimetro' la funzione restituisce la differenza tra il perimetro del
primo rettangolo e il perimetro del secondo rettangolo.
Se il terzo parametro ha valore 'area' la funzione restituisce la somma tra l'area del primo
rettangolo e l'area del secondo rettangolo.
Ad esempio:
opeRettangolo( rect1, rect2, 'area' ) -> risultato
opeRettangolo( rect1, rect2, 'perimetro' ) -> risultato
Chiama la funzione 2 volte per stampare i valori prodotti, usando valori a piacere. */

const ret1 = {
  x: 5,
  y: 15,
};

const ret2 = {
  x: 8,
  y: 11,
};

function transform(ret1, ret2, str) {
  let perimetroRet1 = (ret1.x + ret1.y) * 2;
  let perimetroRet2 = (ret2.x + ret2.y) * 2;
  let areaRet1 = ret1.x * ret1.y;
  let areaRet2 = ret2.x * ret2.y;

  if (str == "perimetro") {
    return perimetroRet1 - perimetroRet2;
  } else if (str == "area") {
    return areaRet1 + areaRet2;
  }
}

console.log(transform(ret1, ret2, "perimetro"));
console.log(transform(ret1, ret2, "area"));

//finito

}


{
  /* Creare una funzione chiamata opeStringa che accetta 2 parametri:
- una stringa
- una funzione che prende in ingresso una stringa e restituisce una nuova stringa,
trasformata
La funzione opeStringa deve restituire la stringa prodotta dalla funzione passata come secondo
parametro.
In fase di chiamata di opeStringa, operare nel seguente modo:
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la versione
maiuscola
- chiamare opeStringa con una stringa "javascript" e una funzione che produca una stringa
contenente solo i caratteri alla posizione dispari
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la stringa
invertita
Ad esempio:
s = javascript
opeStringa(s, uc) -> produce JAVASCRIPT
opeStringa(s, odd) -> produce aacit
opeStringa(s, invert) -> produce tpircsavaj
Stampare in output i risultati. */

var s = "javascript";

function opeStringa(str, fn) {
  return fn(str);
}

function upperCase(str) {
  return str.toUpperCase();
}

function oddNum(str) {
  let oddNumber = "";
  for (var i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      oddNumber += str[i];
    }
  }
  return oddNumber;
}

function invertiStringa(str) {
  let reverseString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

let res1 = opeStringa(s, upperCase);
console.log(res1);

let res2 = opeStringa(s, oddNum);
console.log(res2);

let res3 = opeStringa(s, invertiStringa);
console.log(res3);

//finito

}


