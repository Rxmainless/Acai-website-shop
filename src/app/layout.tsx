import { ThemeProvider } from 'next-themes'
import './globals.css'
import React from "react";

export const metadata = {
  title: 'Açaí da Bebê',
  description: 'O açaí que tira seu tédio',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR">
      <body>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}