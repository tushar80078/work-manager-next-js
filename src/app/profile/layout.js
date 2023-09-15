import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1>This is profile header</h1>
        {children}
        <h1>This is profile footer</h1>
    </div>
  )
}

export default layout