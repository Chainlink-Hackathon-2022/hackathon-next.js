import Navbar from "./Navbar"


export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    )
  }

  //https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51