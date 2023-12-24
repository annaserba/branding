"use client"
import StyledComponentsRegistry from './lib/registry'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
