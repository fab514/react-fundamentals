// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// You can provide a default value if not changed
// spread of other props and style added to not override props
function Box({ className = '', size, style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div className={`box ${className} ${sizeClassName}`} style={{ fontStyle: 'italic', ...style }} {...otherProps} />
  )
}

const smallBox = <Box size={'small'} style={{ backgroundColor: 'lightBlue' }}>small lightblue box</Box>
const mediumBox = <Box size={'medium'} style={{ backgroundColor: 'pink' }}>medium pink box</Box>
const largeBox = <Box size={'large'} style={{ backgroundColor: 'orange' }}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
