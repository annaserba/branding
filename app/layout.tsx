"use client"
import StyledComponentsRegistry from './lib/registry'
import '../public/style.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
