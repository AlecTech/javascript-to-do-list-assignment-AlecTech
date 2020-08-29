// Grab our button as practice.
 // We can see in console we successfully retrieved this element!


const clickB = document.querySelector('button');
console.log(clickB);

const taskField = document.querySelector( 'p > input' ); 
console.log( taskField );

const inputForm = document.querySelector('#inputForm');
console.log(inputForm);

const newInput = document.querySelector( '.ch1 > ul' );
console.log(newInput);



clickB.addEventListener('click',() => {
console.log('The button was clicked');
// if(taskField.classList.contains('newInput'))
// {
//     taskField.classList.remove('li')
// }
// else{
//     taskField.classList.add('li')
// }


// <button id="deleteTask">Delete</button>


});

// Had to ask Aaron Barthel for help on EventListener bacause my 
// code was only telling that button was clicked and not doing anything.
// Aaron gave me valuable hint and review of my code and basically pointed
// me in the right direction with guiding question. 
inputForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const task = taskField.value;
    
    //toLocaleString borrowed from - 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });  

    const newLI = document.createElement('LI'); /* type="checkbox"> */
    newLI.innerHTML = `
        <input type="checkbox"> ${task}</input> 
        <time> ${time} </time> 
        `;

    


    const deleteButton = document.createElement('BUTTON');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", ()=> {
        newInput.removeChild(newLI);

    });
    
    newLI.appendChild(deleteButton);
    newInput.appendChild(newLI);
    newLI.appendChild(newCheckBox);

});


//doesn't work

const inputForm2 = document.querySelector('#inputForm2');
console.log(inputForm2); 

const newCheckBox = document.createElement('CHECKOFF');
    newCheckBox.type = "checkbox"; 
    
    inputForm2.addEventListener('submit', (e) => {
    e.preventDefault();

      /*       if(newCheckBox.contains('CHECKOFF'))
        {
            taskField.remove('li')
        } */
        // var inputForm2 = document.querySelector('newCheckBox');
        console.log(inputForm2);
        const newCheckBox = inputForm2.value;

        const newLI = document.createElement('LI'); /* type="checkbox"> */
        newLI.innerHTML = `
            <input ${newCheckBox}> ${task}</input> 
            <time> ${time} </time> 
            `;
    
            newLI.appendChild(newCheckBox);
            newInput.appendChild(newLI);
            

    if(newCheckBox.contains('CHECKOFF'))
        if(this.checked) {
            console.log("Checked")
        } else {
            console.log("Not Checked")
        }

   /*  newCheckBox.addEventListene( 'change', function() {
    if(this.checked) {
        console.log("Checked")
    } else {
        console.log("Not Checked")
    } 
    

    });*/

    
}); 