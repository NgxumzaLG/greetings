
function greeting() {
    var theName = "";
    var storeNames = [];
    var counter = 0;

    function setName(myName) {
        if (myName !== "" ) {
            theName = myName.trim();
           
        }

    }

    function getName() {
        return theName;

    }

    function greetMe(checkedLanguage) {
        if (checkedLanguage === "english") {
            return "Hello, " + getName();;

        } else if (checkedLanguage === "afrikaans") {
            return "Hallo, " + getName();;

        } else if (checkedLanguage === "isixhosa") {
            return "Molo, " + getName();;

        }

    }

    function addNames(name) {
        if(!storeNames.includes(name)) {
            storeNames.push(name)
            counter++
        }
        // for (var i =0; i<storeNames.length; i++)
        // if (storeNames[i] !== theName) {
        //     storeNames.push(theName);
        //     counter++
        // }
    }

    function getCounter(){
        return counter;
    }

    function namesAdded(){ 
        return storeNames
    }

    return {
        setName,
        getName,
        greetMe,
        addNames,
        getCounter,
        namesAdded

    }
}