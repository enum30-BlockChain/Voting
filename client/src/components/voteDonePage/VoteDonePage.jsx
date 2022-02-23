import React, { useState } from 'react'

 function VoteDonePage() {
     const [투표완료자, set투표완료자] = useState(['철순','해민','준영','석훈','투표'])

  return (
    <div>
        <h2>투표완료자 목록</h2>
        <ul>
            <li>{투표완료자[0]}</li>
            <li>{투표완료자[1]}</li>
            <li>{투표완료자[2]}</li>
            <li>{투표완료자[3]}</li>
            <li>{투표완료자[4]}</li>
        </ul>
    </div>
  )
}
export default VoteDonePage;