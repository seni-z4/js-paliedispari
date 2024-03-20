console.log("hello-world");

//Palidroma
/*Chiedere all’utente di inserire una parola Creare una 
funzione per capire se la parola inserita è palindroma. 
Questa funzione deve ricevere come input la parola inserita 
dall’utente e ritornare true se la parola è palindroma e false
 se la parola non è palindroma */

//chiedere al utente di inserire una parola palidroma

// const name = prompt("inserisci una palindroma");
// console.log(name);

//creare una funziona per capire se e una palindroma

function checkIfPalindroma(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = checkIfPalindroma(string);

console.log(value);
