import './globals.css'
import Navbar from './shared/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
