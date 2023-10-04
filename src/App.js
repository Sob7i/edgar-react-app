import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = process.env.REACT_APP_LOREMIPSUM_API_KEY
const API_URL = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs='

function App() {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'X-Api-Key': `${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.text) {
          console.log('data :>> ', data)
          setArticle(data.text)
        }
      })
  }, [])

  return (
    <div className="App">
      <header id='header'>header</header>
      <main id='main'>
        <div id='main-container'>
          {article && article}
        </div>
      </main>
      <footer id='footer'>footer</footer>
    </div>
  )
}

export default App
