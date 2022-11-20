import Link from 'next/link'

export default function Server(){
    console.log('server 3')
    return(
        <div>
            <Link href='/'>HOME PAGE</Link>
            <h1>Server Page</h1>
        </div>
    )
}