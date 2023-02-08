import { format, formatDistanceToNow } from "date-fns"
import ptbr from "date-fns/locale/pt-BR"

import { useState } from "react"
import { Avatar } from "./Avatar"
import { Comment } from "./comment"
import styles from "./Post.module.css"

export function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, heim?"])

  const [newCommentText, setNewCommentText] = useState("")

  const publisheDateFormated = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptbr,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptbr,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publisheDateFormated} dateTime={publishAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback...</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />
        })}
      </div>
    </article>
  )
}
