import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full text-center text-dark text-sm p-3 bg-sky-300">
        &copy; {year} Copyright{" "}. All Rights Reserved
    </footer>
  )
}

export default Footer
