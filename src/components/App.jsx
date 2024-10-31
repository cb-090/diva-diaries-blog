import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import "./App.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [canWrite, setCanWrite] = useState(false)
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  return (
    <div className="App">
      <header>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        <div className="title">
          <h1>Diva Diaries</h1>
          <img alt="The purple heart from the 'who's this DIVA' meme" src="https://th.bing.com/th/id/R.988a8cb75d620389fb4228df99e9ca3d?rik=V9jqiAIQee2RnA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpurple-heart-transparent%2fpurple-heart-transparent-11.png&ehk=2M4yMubKnkZC7ctEGED600LI2sM8MiyOu7tVHGKNzkQ%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? <div className="homePage"></div> : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle}/>
      ) : (
        <Article article={article} />
      )}
    </div>
  )
}