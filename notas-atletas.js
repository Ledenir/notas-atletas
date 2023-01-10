class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas
    } 

   calculaMediaValida() {
    // Ordenação das notas
   this.notas = this.notas.sort();

   // Eliminando as maiores e menores notas
   this.notas = this.notas.slice(1, 4);

   // Calculando a média
   // Acumulador para salvar a soma das notas
   var acumulador = 0;
   // Metodo forEach para somar as notas
   this.notas.forEach((nota) => {
     acumulador = nota + acumulador;
   });

   // Calculo da media utilizando o acumulador e a quantidade de notas
   let mediaValida = acumulador / this.notas.length;

   // Retorna a media valida do atleta
   return mediaValida;
 }
    obtemNomeAtleta(){
        return this.nome
    } 

    obtemNotasAtleta() {
        return this.notas;
    } 
}

let cezar = new Atleta("Cesar Abascal",[10, 9.34, 8.42, 10, 7.88], );
console.log("Nome: " + cezar.obtemNomeAtleta());
console.log("Notas: " + cezar.obtemNotasAtleta());
console.log("Média válida: " + cezar.calculaMediaValida());

let fernando = new Atleta("Fernando Puntel",[8, 10, 10, 7, 9.33] );
console.log("Nome: " + fernando.obtemNomeAtleta());
console.log("Notas: " + fernando.obtemNotasAtleta());
console.log("Média válida: " + fernando.calculaMediaValida());

let daiane = new Atleta("Daiane Jelinsky",[7, 10, 9.5, 9.5, 8]);
console.log("Nome: " + daiane.obtemNomeAtleta());
console.log("Notas: " + daiane.obtemNotasAtleta());
console.log("Média válida: " + daiane.calculaMediaValida());

let bruno = new Atleta("Bruno Castro",[10, 10, 10, 9, 9.5]);
console.log("Nome: " + bruno.obtemNomeAtleta());
console.log("Notas: " + bruno.obtemNotasAtleta());
console.log("Média válida: " + bruno.calculaMediaValida());
