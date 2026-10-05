import { useState } from 'react'

function StudentMarks({ name, subject, marks }) {
  const [currentMarks, setCurrentMarks] = useState(marks)

  const increaseMarks = () => {
    setCurrentMarks(currentMarks + 5)
  }

  const decreaseMarks = () => {
    setCurrentMarks(currentMarks - 5)
  }

  return (
    <div>
      <p>Student: {name}</p>
      <p>Subject: {subject}</p>
      <p>Marks: {currentMarks}</p>

      <button onClick={increaseMarks}>
        Increase Marks
      </button>

      <button onClick={decreaseMarks}>
        Decrease Marks
      </button>
    </div>
  )
}

export default StudentMarks