import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Tibszi Légvár Bérlés Sopron – Ugrálóvár kölcsönzés' },
      {
        name: 'description',
        content:
          'Légvár bérlés Sopronban és környékén. 20+ ugrálóvár gyerekzsúrra, rendezvényre. Kiszállítás, felszerelés, lebontás. Hívjon most: +36 20 522 7000',
      },
      { name: 'keywords', content: 'légvár bérlés Sopron, ugrálóvár bérlés Sopron, ugrálóvár gyerekzsúr, légvár rendezvényre, légvár kölcsönzés Sopron' },
      { property: 'og:title', content: 'Tibszi Légvár Bérlés Sopron' },
      {
        property: 'og:description',
        content: '20+ ugrálóvár bérlése gyerekzsúrra és rendezvényekre Sopronban. Kiszállítás ingyen 15 km-en belül!',
      },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'hu' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
