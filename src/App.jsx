import React from 'react'
import Education from './Education'
import Address from './Address'
import Contact from './Contact'

const App = () => {
  return (
    <div>
      <div>Profile</div>
      <h2>นาย วรวิทย์ รูปสูง</h2>
      <h4>ชื่อเล่น: ทิว</h4>
      <h3>อาชีพ: นักศึกษา</h3>
      <h5>อายุ: 22 ปี</h5>
      <hr/>
      <Education/>
      <hr/>
      <Address/>
      <hr/>
      <Contact/>
      <hr/>
    </div>
  )
}

export default App