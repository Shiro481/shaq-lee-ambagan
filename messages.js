


let allMessage = loadMessages();
displayMessages(allMessage);


function displayMessages(allMessage){
    const messageContainer = document.querySelector('.messages-container');
    messageContainer.innerHTML = '';
    allMessage.forEach((message, index)=>{
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-content');
        messageDiv.innerHTML = `
        <p>Name: ${message.name}</p>
        <p>Email: ${message.email}</p>
        <p>Message: ${message.message}</p>
        `

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            allMessage.splice(index, 1);
            saveMessages(allMessage);
            loadMessages();
            displayMessages(allMessage);
        });

       
        
        messageContainer.appendChild(messageDiv);
        messageDiv.appendChild(deleteBtn);
    })
    
}




function loadMessages(){
    const allMessage = localStorage.getItem('allMessage');
    return allMessage ? JSON.parse(allMessage) : [];
}

function saveMessages(allMessage){
    localStorage.setItem('allMessage', JSON.stringify(allMessage));
}