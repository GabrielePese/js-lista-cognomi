// Per l'esercizio di oggi, chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
// Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.
// Se finite presto, fate come bonus, una ricerca su come ordinare l'array utilizzando i cicli for e/o while. Il tutto rigorosamente in cartella bonus.
// Vi ho messo le slide e, appena smette di convertire, metterò anche il video a disposizione.
// Sotto avete il codice di stamattina.


var cognome = prompt ("Dimmi il tuo cognome");
var lista = ["cuni", "stellini", "rossi", "bianchi"];


console.log(lista);

lista.push(cognome)

console.log(lista);


console.log("---------------");

var trovato=false;
for (var i = 0; i < lista.length; i++) {

  console.log(lista[i].localeCompare(lista[i+1]));

  if (lista[0].localeCompare(lista[1]) == -1) {
    lista[0] = (lista[1])

  }
  console.log(lista);
}
