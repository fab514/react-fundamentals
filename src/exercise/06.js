// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// function UsernameForm({ onSubmitUsername, isValid }) {
// const usernameInputRef = React.useRef('')
/* exercise
function handleSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.usernameInput.value
  onSubmitUsername(value);
}
*/
// Extra Credit 1
// function handleSubmit(event) {
//   event.preventDefault();
//   const value = usernameInputRef.current.value
//   onSubmitUsername(value);
// }

/* Extra Credit 2
const [error, setError] = React.useState(null)
function handleChange(event) {
  const { value } = event.target;
  const isLowerCase = value === value.toLowerCase();
  setError(isLowerCase ? null : 'Usename must be lowercase');
}
return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='usernameInput'>Username:</label>
      <input ref={usernameInputRef} type="text" id="usernameInput" onChange={handleChange} />
    </div>
    <div style={{ color: 'red' }}>{error}</div>
    <button disabled={Boolean(error)} type="submit">Submit</button>
  </form>
)
}
*/

// Extra Credit 3
function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const { value } = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

// onChange handler necessary in order to change the value from the initial value
// `event.preventDefault()` to prevent the default behavior of form submit events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// associate the label to the input by setting the value of 'htmlFor' prop of the label to the id of input. If you click on the username it will bring focus to the input
