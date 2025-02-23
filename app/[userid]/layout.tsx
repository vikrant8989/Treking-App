import type React from "react"
import Sidebar from "./components/sidebar"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className="flex bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

