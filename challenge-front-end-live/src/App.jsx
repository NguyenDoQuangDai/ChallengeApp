import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ChallengeList from './component/ChallengeList'
import AddChallenge from './component/AddChallenge'

function App() {
  const [challenges, setChallenges] = useState([])

  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data)
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  }

  useEffect(() => {
    fetchChallenges();
  }, [])

  const handleChallengeAdded = () => {
    fetchChallenges() ;
  } 

  const handleChallengeDeleted = async (challengeId) => {
    try {
      await axios.delete(`http://localhost:8080/challenges/${challengeId}`);
      fetchChallenges(); // Refresh danh sách sau khi xóa
    } catch (error) {
      console.error('Error deleting challenge:', error);
    }
  }

  return (
    <div className='center container-fluid mt-5'>
      <h1 className='text-center mb-4'>Monthly Challenges</h1>
      <AddChallenge onChallengeAddded={handleChallengeAdded}/>
      <ChallengeList challenges={challenges} onChallengeDeleted={handleChallengeDeleted}/>
    </div>
  )
}

export default App
