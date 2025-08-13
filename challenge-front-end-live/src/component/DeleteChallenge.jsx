import { useState } from 'react';
import axios from 'axios';

function DeleteChallenge({ challenge, onChallengeDeleted }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!window.confirm(`Are you sure about deleting challenge OF "${challenge.name}"?`)) {
            return;
        }

        setIsDeleting(true);
        try {
            await axios.delete(`http://localhost:8080/challenges/${challenge.id}`);
            onChallengeDeleted();
        } catch (error) {
            console.error('Error deleting challenge:', error);
            alert('Error deleting challenge. Please try again!');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button 
            type="button" 
            className="btn-close" 
            aria-label="Close"
            onClick={handleDelete}
            disabled={isDeleting}
            title={isDeleting ? "Deleting..." : "Delete challenge"}
            style={{ 
                opacity: isDeleting ? 0.6 : 1,
                cursor: isDeleting ? 'not-allowed' : 'pointer'
            }}
        ></button>
    );
}

export default DeleteChallenge;
