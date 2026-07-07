import './globals.css'

export const metadata = {
  title: 'Chandrasekar Pasumarthi | AI Research Portfolio',
  description: 'AI, machine learning, research, leadership, and projects portfolio.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
