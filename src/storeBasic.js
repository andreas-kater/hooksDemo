import { useState } from 'react'

let listeners = []

let globalState = {
  count: 10,
}

export const setGlobalState = (newState) => {
  globalState = { ...globalState, ...newState }
  listeners.forEach((listener) => {
    listener(globalState)
  })
}

const useGlobal = () => {
  const newListener = useState()[1]
  listeners.push(newListener)
  return [globalState, setGlobalState]
}

export default useGlobal
