import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {

  let myobj={
    username: "Hitesh",
    age: 21
  }

  return ( 
    <>
        <h1 className="bg-green-400 text-black rounded-xl">Hey, there</h1>

      <Card username="Rajibul"  val="ABC" obj={myobj}/>
      <Card username="Ronth" val="ABC" />

        

    </>
  )
}

export default App
