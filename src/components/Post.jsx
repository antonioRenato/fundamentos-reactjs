import { Avatar } from "./Avatar"
import { Comment } from "./comment"
import styles from "./Post.module.css"

export function Post(props) {
  console.log(props)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https:/github.com/antonioRenato.png" />
          <div className={styles.authorInfo}>
            <strong>Antonio Renato</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de feveiro às 09:37" dateTime="">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback...</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
