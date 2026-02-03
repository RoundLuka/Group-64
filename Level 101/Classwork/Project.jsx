import { useState, useEffect } from "react";
// import './App.css'

function Container() {
    const [account, setAccount] = useState(() => {
        return (JSON.parse(localStorage.getItem("account")) || null)
    });
    const [accounts, setAccounts] = useState(() => {
        return (JSON.parse(localStorage.getItem("accounts")) || [])
    });
    const [students, setStudents] = useState(() => {
        return (JSON.parse(localStorage.getItem("students")) || [])
    });

    // saving to localstorage
    useEffect(() => {
        localStorage.setItem("account", JSON.stringify(account));
        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("students", JSON.stringify(students));
    }, [account, accounts, students])

    const handleRegister = (e) => {
        e.preventDefault();

        const newAccount = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        const alreadyExists = accounts.some((acc) => acc.email === newAccount.email)
        
        if(!alreadyExists) {
            setAccounts([...accounts, newAccount])
            alert("Account successfuly created!")
        } else {
            alert("Account already exists")
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        
        const credentionals = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        const isLoggedIn = accounts.find((acc) => acc.email === credentionals.email && acc.pass === credentionals.pass)

        if(isLoggedIn) {
            setAccount(credentionals)
            alert("Login in successful")
        } else {
            alert("Invalid credentationals, please try again")
        }
    };

    const logout = (e) => {
        setAccount(null)
    }

    const addStudent = (e) => {
        e.preventDefault();

        const newStudent = {
            name: e.target.studentName.value,
            surname: e.target.studentSurname.value,
            age: e.target.studentAge.value
        }

        setStudents([...students, newStudent])
    }

    const deleteStudent = (index) => {
        const filteredStudents = students.filter((_, i) => i !== index)
        setStudents(filteredStudents)
    }

    return (
        <Presentational handleRegister={handleRegister} handleSignIn={handleSignIn} account={account} students={students} logout={logout} addStudent={addStudent} deleteStudent={deleteStudent} />
    )
}

function Presentational({handleRegister, handleSignIn, account, students, logout, addStudent, deleteStudent}) {
    return (
        <main>
            {account === null ? (
                <section>
                    <h2>Registration</h2>
                    <form onSubmit={handleRegister}>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Register</button>
                    </form>

                    <form onSubmit={handleSignIn}>
                        <h2>Sign In</h2>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Sign In</button>
                    </form>
            </section>
            ) : (
                <section>
                    <h1>Welcome {account.email}</h1>
                    <button onClick={logout}>Log out</button>
                    <br /> <br /> <br />
                    <form onSubmit={addStudent}>  
                        <input type="text" placeholder="Student Name" name="studentName" required/>
                        <input type="text" placeholder="Student Surname" name="studentSurname" required/>
                        <input type="number" placeholder="Student Age" name="studentAge" required/>
                        <button>Add</button>
                    </form>

                    <table>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                            {students.map((stud, index) => {
                            return (
                                <tr key={index}>
                                    <td>{stud.name}</td>
                                    <td>{stud.surname}</td>
                                    <td>{stud.age}</td>
                                    <button onClick={() => deleteStudent(index)}>Delete</button>
                                </tr>
                            )
                            })}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
    )
}

function App() { 
    return (
        <Container />
    )
}

export default App;