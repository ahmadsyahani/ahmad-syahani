import './globals.css'
import {
  Inter
} from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'Ahmad Syahani | High School Student',
}

export default function RootLayout({
  children
}) {
  return ( <
    html lang = "en" >
    <
    body className = {
      inter.className
    } >
    <
    Header / > {
      children
    } 
    </body> 
    </html >
  )
}