import { useState } from 'react';
import axios from 'axios';

function AddChallenge({onChallengeAddded}) {
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/challenges', {name, month, description});
            setMonth('');
            setName('');
            setDescription('');
            onChallengeAddded();
        } catch (error) {
            console.error('Error submitting challenge:', error);
        }
    }

    return (
        <div className="card my-5">
            <div className="card-header">Add a New Challenge</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className='form-control' id="name" value={name} 
                            placeholder="Your name here" onChange={(e) => setName(e.target.value)} required>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="month" className="form-label">Month</label>
                        <input type="text" className='form-control' id="month" value={month} 
                            placeholder='e.g., January' onChange={(e) => setMonth(e.target.value)} required>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className='form-control'  id="description" value={description} 
                            placeholder="Describe the challenge" onChange={(e) => setDescription(e.target.value)} required>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit!</button>
                </form>
            </div>
        </div>
    )
}

export default AddChallenge;