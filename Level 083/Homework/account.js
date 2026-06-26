export default class Account {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

export function getAccountUsername(account) {
    console.log(`Account username: ${account.username}`)
}

export function getAccountEmail(account) {
    console.log(`Account email: ${account.email}`)
}
