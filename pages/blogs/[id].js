import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            post,
        },
    }
}
function Blog({ post }) {
    return (
        <ul className="blogs">
            <Head>
                <title>{post.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <li>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </li>
        </ul>
    )
}

export default Blog