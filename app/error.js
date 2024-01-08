'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {

  return (
    <div style={{ padding: '200px', paddingLeft: "500px" }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        style={{ padding: '10px', backgroundColor: 'black', color: 'white', border:  'black', cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  )
}