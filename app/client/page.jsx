'use client'

import Link from 'next/link'

export default function Client(){
    console.log('client 2')
    return(
        <div>
            <Link href='/'>HOME PAGE</Link>
            <h1>Client Page</h1>
        </div>
    )
}