'use client'

export default function LoginApp({children}){
    console.log('client 1')
    return(
        <div>
            <h1>Login Page</h1>
            {children}
        </div>
    )
}