// Per l'esercizio di oggi, chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
// Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.
// Se finite presto, fate come bonus, una ricerca su come ordinare l'array utilizzando i cicli for e/o while. Il tutto rigorosamente in cartella bonus.
// Vi ho messo le slide e, appena smette di convertire, metterò anche il video a disposizione.
// Sotto avete il codice di stamattina.


var cognome = prompt ("Dimmi il tuo cognome");
var lista = ["cuni", "stellini", "rossi", "bianchi"];



lista.push(cognome)


lista.sort();

console.log(lista);

console.log("---------------");

var trovato=false;
for (var i = 0; i < lista.length; i++) {

  // console.log(lista[i].localeCompare(lista[i+1]));


[lista[0], lista[1], lista[2], lista[3], lista[4]] = [lista[3], lista[0], lista[4], lista[2], lista[1],   ];

  console.log(lista);
}



// function lista(arr, old_index, new_index) {
//     if (new_index >= arr.length) {
//         var i = new_index - arr.length + 1;
//         while (i--) {
//             lista.push(undefined);
//         }
//     }
//     lista.splice(new_index, 0, lista.splice(old_index, 1)[0]);
//     return lista; // for testing
// };
//
// // returns [2, 1, 3]
// console.log(lista([1, 2, 3], 0, 1));
//
// // lista.move()
// // myArray.move(moveFromPosition, moveToPosition)
// // var simpleArray = ["Han Solo", "Luke Skywalker", "C3P0", "R2D2"];
// // simpleArray.move(3, 0);
