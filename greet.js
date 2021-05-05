// Reference all the class needed
    var textboxName = document.querySelector(".nameText");
    var radioLanguage = document.querySelector(".radio-lang");
    var greetButton = document.querySelector(".greetBtn");
    var messageField = document.querySelector(".greet-message");
    var nameCounter = document.querySelector(".counter");
    var testField = document.querySelector(".test")

//add an event listener for when buttons are pressed
    greetButton.addEventListener('click', greetUser);

// add functions for the events
    let greetFactory = greeting();

    function greetUser() {

        greetFactory.setName(textboxName.value);
        // greetFactory.addNames(textboxName.value);
    

        var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        greetFactory.greetMe(checkedRadioBtn.value);
        greetFactory.addNames(textboxName.value)

        console.log(textboxName.value)

        messageField.innerHTML = greetFactory.greetMe(checkedRadioBtn.value);
        nameCounter.innerHTML = greetFactory.getCounter()
        testField.innerHTML= greetFactory.namesAdded()
        console.log(greetFactory.namesAdded())
        
    }