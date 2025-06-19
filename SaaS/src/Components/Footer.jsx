import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
      © {new Date().getFullYear()} SaaSApp. All rights reserved.
    </footer>
    </div>
  )
}

export default Footer
