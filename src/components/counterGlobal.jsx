import React from 'react'
import useGlobal from '../storeBasic'

export default function Example() {
  const [globalState, setGlobalState] = useGlobal()
  const { count } = globalState

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setGlobalState({ count: count + 1 })} >
        Click me
      </button>
    </div>
  )
}