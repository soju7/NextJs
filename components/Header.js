import Link from 'next/link'
export default function Header() {
    return (
        <ul className='nav'>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
      )
}