import Link from 'next/link'

export default function StaticProps(){
    console.log('server 5')
    return(
        <div>
            <Link href='/'>HOME PAGE</Link>
            <h1>StaticProps Page</h1>
        </div>
    )
}