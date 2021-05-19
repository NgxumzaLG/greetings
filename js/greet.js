// Reference all the class needed
    var textboxName = document.querySelector(".nameText");
    var radioLanguage = document.querySelector(".radio-lang");
    var greetButton = document.querySelector(".greetBtn");
    var messageField = document.querySelector(".greet-message");
    var nameCounter = document.querySelector(".counter");
    var testField = document.querySelector(".test")
    var refreshButton = document.querySelector(".refreshBtn")

//add an event listener for when buttons are pressed
    greetButton.addEventListener('click', greetUser);
    refreshButton.addEventListener('click', refreshPage);

// add functions for the events
    
    var strCheckedRadioBtn = "";
    var strNames = "";
    let  namesGreeted; 
    const RegExp = /^[A-Za-z]+$/;

    if (localStorage['names']) {
        namesGreeted = JSON.parse(localStorage.getItem("names"));

    }
   
    let greetFactory = greeting(namesGreeted);

    nameCounter.innerHTML = greetFactory.getCounter();


    function greetUser() {

        if (textboxName) {
            strNames = textboxName.value;

        }

        messageField.classList.remove('proceed');
        messageField.classList.remove('error');

        greetFactory.setName(strNames);
      
    
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        
       if(checkedRadioBtn){
            strCheckedRadioBtn = checkedRadioBtn.value;

       }

       greetFactory.addNames(strNames, strCheckedRadioBtn);

       
        if (strNames !== "") {
            if (strNames.match(RegExp)) {
                if ( strCheckedRadioBtn !== '') {
                    setTimeout(function() { 
                        messageField.innerHTML= greetFactory.greetMe(strCheckedRadioBtn);
                        textboxName.value = '';
                        document.getElementById('radio-lang1').checked = false;
                        document.getElementById('radio-lang2').checked = false;
                        document.getElementById('radio-lang3').checked = false;
                        strCheckedRadioBtn = "";
                    }, 0);

                    setTimeout(function() { 
                        messageField.innerHTML = "";
                        messageField.classList.remove('error');
                        messageField.classList.remove('proceed');
                    }, 5500);

                } else {
                    setTimeout(function() { 
                        messageField.innerHTML= "Error! language not selected"
                        messageField.classList.remove('proceed');
                        messageField.classList.add('error');
                    }, 0);
        
                    setTimeout(function() { 
                        messageField.innerHTML = "Please select any language";
                        messageField.classList.remove('error');
                        messageField.classList.add('proceed');
                    }, 3000);

                    setTimeout(function() { 
                        messageField.innerHTML = "";
                        messageField.classList.remove('error');
                        messageField.classList.remove('proceed');
                    }, 5750);
        
                }
        
            } else {
                setTimeout(function() { 
                    messageField.innerHTML= "Error! special characters entered"
                    messageField.classList.remove('proceed');
                    messageField.classList.add('error');
                }, 0);

                setTimeout(function() { 
                    messageField.innerHTML = "Please enter alphabets only";
                    messageField.classList.remove('error');
                    messageField.classList.add('proceed');
                }, 3000);

                setTimeout(function() { 
                    messageField.innerHTML = "";
                    messageField.classList.remove('error');
                    messageField.classList.remove('proceed');
                }, 5750);
        
            } 
        } else {
            setTimeout(function() { 
                messageField.innerHTML= "Error! name not entered"
                messageField.classList.remove('proceed');
                messageField.classList.add('error');
            }, 0);

            setTimeout(function() { 
                messageField.innerHTML = "Please enter the name";
                messageField.classList.remove('error');
                messageField.classList.add('proceed');
            }, 3000);

            setTimeout(function() { 
                messageField.innerHTML = "";
                messageField.classList.remove('error');
                messageField.classList.remove('proceed');
            }, 5750);

        }
   
       
        localStorage.setItem("names", JSON.stringify(greetFactory.namesAdded()));

        nameCounter.innerHTML = greetFactory.getCounter();
       
        
    }

    function refreshPage() {
        localStorage.clear();
        // location.reload();

        setTimeout(function() { 
            messageField.innerHTML = "The page has been succesfully reset";
            messageField.classList.remove('error');
            messageField.classList.add('proceed');
            textboxName.value = '';
            document.getElementById('radio-lang1').checked = false;
            document.getElementById('radio-lang2').checked = false;
            document.getElementById('radio-lang3').checked = false;
            nameCounter.innerHTML = 0;
        }, 0);

        setTimeout(function() { 
            location.reload();
        }, 2500);

    }