// import { useState } from 'react'

export default function Note(props) {
  const { session } = props;
  console.log(session);

  return (
    <div className="row flex-center flex">
      {`Welcome ${session.user.email}!`}
    </div>
  )
}
