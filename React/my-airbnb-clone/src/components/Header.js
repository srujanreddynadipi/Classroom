import React from 'react'

const sharedClasses = {
  input: 'p-2 border border-border rounded',
  button: 'bg-primary text-primary-foreground p-2 rounded hover:bg-primary/80',
}

const Header = () => {
  return (
    <header className="flex justify-between w-full p-4">
      <div className="text-2xl font-bold text-foreground">Airbnb</div>
      <nav>
        <a href="#" className="text-muted">
          Airbnb your place
        </a>
        <a href="#" className="ml-4 text-muted">
          Sign up
        </a>
      </nav>
    </header>
  )
}

const Main = () => {
  return (
    <main className="flex flex-col items-center w-full max-w-4xl p-6">
      <h1 className="text-3xl font-semibold text-foreground">Find places to stay on Airbnb</h1>
      <p className="mt-2 text-muted-foreground">Discover entire homes and rooms perfect for any trip.</p>
      <div className="mt-6 p-6 bg-card rounded-lg shadow-md w-full">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Location" className={sharedClasses.input} />
          <input type="date" placeholder="Check In" className={sharedClasses.input} />
          <input type="date" placeholder="Check Out" className={sharedClasses.input} />
          <div className="flex space-x-4">
            <input type="number" min="1" value="2" className={sharedClasses.input} placeholder="Adults" />
            <input type="number" min="0" value="0" className={sharedClasses.input} placeholder="Children" />
          </div>
          <button className={sharedClasses.button}>Search</button>
        </form>
      </div>
    </main>
  )
}

const Image = () => {
  return <img aria-hidden="true" alt="Kitchen interior" src="https://openui.fly.dev/openui/600x400.svg?text=Kitchen+Interior" className="mt-6 rounded-lg shadow-lg" />
}

const AirbnbComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Header />
      <Main />
      <Image />
    </div>
  )
}

export default AirbnbComponent