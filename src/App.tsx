import './global.css'
import styles from './App.module.css'

import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/iPaulinh0.png',
      name: 'Paulo Victor',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-05-26 00:44:52')
  },

  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de gravar mais uma aula para o Ignite. Bora codar!? 🚀' },
      { type: 'link', content: '👉 rocketseat.com.br' }
    ],
    publishedAt: new Date('2024-05-25 08:32:52')
  },

  {
    id: 3,
    author: {
      avatarURL: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator at @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal, Mayk Brito na área! 👋' },
      { type: 'paragraph', content: 'Novo video do Diegão na plataforma tá muito bom hein. Não vai perder! 🚀' },
      { type: 'link', content: '👉 rocketseat.com.br' }
    ],
    publishedAt: new Date('2024-05-26 08:38:37')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}