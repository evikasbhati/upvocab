import './globals.css'
import { Inter } from 'next/font/google'
import  theme from "@/style/theme"
import { ThemeProvider }from "@mui/material"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider theme={theme}>
        {children}</ThemeProvider></body>
    </html>
  )
}
