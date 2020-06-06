import React from 'react'

const Goals = ({goals}) => {
    return (
        <div>
            {goals.map((goal, key) => (
                <h2>{goal.description}</h2>
            ))}
        </div>
    )
};

export default Goals;
