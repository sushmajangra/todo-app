import React from 'react'

export const Footer = () => {
  let styleFooter = {
    position: "absolute",
    width: "100%",
    top: "100vh"
  }
  return (
    <footer className="bg-dark text-light" style={styleFooter}>
      <p className="text-center">
        Copyright &copy; My Todolist.com
      </p>
      
    </footer>
  )
}

