import React, { useStatus, useEffect } from 'react';

export default function FriendStatus(props) {
  const [status, setStatus] = useStatus('offline')

  useEffect(() => {
    const onSnapshot = (status) => setStatus(status)
    ChatAPI.status.subscribe(props.friend.id, onSnapshot)
    return () => {
      ChatAPI.status.unsubscribe(props.friend.id, onSnapshot)
    }
  }, [props.friend.id, setStatus])
  return (
    <p>Your status is {status} </p>
  )
}