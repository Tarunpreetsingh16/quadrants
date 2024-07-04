import "@/app/globals.css"
import "@/app/pages/mainPage/css/style.css"

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" style={{scrollBehavior: 'smooth'}}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}