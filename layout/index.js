import Header from '../components/Header'

export default function Layout({ children }) {
    return (
        <div className='container'>
            <Header />
            {children}
        </div>
    )
}