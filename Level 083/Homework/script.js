import Account, {getAccountUsername as getName, getAccountEmail as getEmail} from './account.js';

let myAccount = new Account("Luka", "luka@gmail.com", "luka1234")

getName(myAccount)
getEmail(myAccount)


// as - alias

console.log