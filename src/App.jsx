import { Header } from "./components/header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/antonioRenato.png",
      name: "Antonio Renato",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 🖐" },
      {
        type: "paragraph",
        content: "Estudei HTML, CSS e JS, agora estou estudando React!!",
      },
      { type: "link", content: "dani.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ddevitz.png",
      name: "Daniela Devitz",
      role: "Student of Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 🖐" },
      {
        type: "paragraph",
        content:
          "Estou quase finalizando o curso Discover da rocketseat, aprendendo muito 😁.",
      },
      { type: "link", content: "dani.devitz/daniela" },
    ],
    publishedAt: new Date("2023-02-05 18:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
