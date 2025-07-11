import { useState } from 'react';
import axios from 'axios';

function AddChallenge() {
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
        } catch (error) {
            console.error('Error submitting challenge:', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" value={name} 
                        onChange={(e) => setName(e.target.value)} required>
                    </input>
                </div>
                <div>
                    <label htmlFor="month" className="form-label">Month</label>
                    <input type="text" id="month" value={month} 
                        onChange={(e) => setMonth(e.target.value)} required>
                    </input>
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" value={description} 
                        onChange={(e) => setDescription(e.target.value)} required>
                    </textarea>
                </div>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default AddChallenge;