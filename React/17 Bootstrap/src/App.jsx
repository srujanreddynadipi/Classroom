import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
      <br />
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
      <br />
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
        <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
        <button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
        <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
        <button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
    </>
  )
}

export default App
