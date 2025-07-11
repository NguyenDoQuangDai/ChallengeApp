import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ChallengeList from './component/ChallengeList'
import AddChallenge from './component/AddChallenge'

function App() {
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('http://localhost:8080/challenges');
        setChallenges(response.data)
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    }
    fetchChallenges();
  }, [])

  return (
    <div className='App'>
      <h1>Monthly Challenges</h1>
      <AddChallenge/>
      <ChallengeList challenges={challenges}/>
    </div>
  )
}

export default App
