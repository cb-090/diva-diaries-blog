export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <>
        <h2>Where's the ARTICLE 💜</h2>
        <p>No article selected.</p>
        </>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <div className="articleBody">
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>
          <p className="body">{article.body}</p>
          </div>
        </section>
      )}
    </article>
  )
}
