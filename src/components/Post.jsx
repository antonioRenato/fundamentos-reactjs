import { Comment } from "./comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/antonioRenato.png"
          />
          <div className={styles.authorInfo}>
            <strong>Antonio Renato</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de feveiro às 09:37" dateTime="">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera 🖐</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return.
        </p>
        <p>
          👉 <a href="">dani.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
          {"  "}
        </p>
      </div>

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
