import React from 'react'

const headerStyle = {
    backgroundColor: "dodgerblue",
    color: "white",
    textAlign: "center",
    height: "55px",
    paddingTop: "10px"
}

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                To Do List
            </h1>
        </header>
    )
}

