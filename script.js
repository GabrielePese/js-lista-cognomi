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

lista.sort();

console.log(lista);

console.log("---------------");

var trovato=false;
for (var i = 0; i < lista.length &&!trovato; i++) {


  if (cognome == lista[0]) {
    trovato= true
    console.log("E' in posizione 0")

  }
  else if (cognome == lista[1]) {
    trovato= true
    console.log("E' in posizione 1")

  }
  else if (cognome == lista[2]) {
    trovato= true
    console.log("E' in posizione 2")

  }
  else if (cognome == lista[3]) {
    trovato= true
    console.log("E' in posizione 3")

  }
  else if (cognome == lista[4]) {
    trovato= true
    console.log("E' in posizione 4")

  }

}
