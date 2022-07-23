import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Blogs.module.css'

function Blogs({ posts }) {
  return (
    
    <ul className="blogs">
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {posts.map((post) => (
        <li key={post.id} className={styles.li}>
          <Link href={`/blogs/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blogs