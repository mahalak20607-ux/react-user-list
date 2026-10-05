import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleSubmit(event) {
        event.preventDefault(); //Prevent page from refreshing
        alert(
            "Registration Successful!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email
        );
    }
    return (
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    placeholder="Enter your name"
                />
                <br />
                <br />
                <label>Email:</label>
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                />
                <br />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>Student Name: {name}</p>
            <p>Student Email: {email}</p>
        </div>
    );
}
export default App;