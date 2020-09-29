import React, { useState } from 'react';

const AddComment = ({addBody}) => {
    const [valueBody, setValueBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valueBody) return;
        addBody(valueBody);
        // ValueBody cambia su valor en el onChange
        setValueBody('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type= "text"
            name="body"
            placeholder="Add Comment"
            onChange = {e => setValueBody(e.target.value)}
            value={valueBody}
            />
        </form>
    )
}

export default AddComment;