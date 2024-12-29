const snowflakesContainer = document.getElementById('snowflakes-container');

function createSnowflakes() {
    const snowflakeCount = 100;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 5 + 2; 
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`; 
        snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflakesContainer.appendChild(snowflake);
    }
}

createSnowflakes();