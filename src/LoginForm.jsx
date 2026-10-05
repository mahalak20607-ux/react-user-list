import { useState } from 'react'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      alert('Login Successful')
    } else {
      alert('Please enter username and password')
    }
  }

  return (
    <div>
      <label>Username</label>
      <br />

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <label>Password</label>
      <br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginForm