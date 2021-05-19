describe('Greet exercise' , function(){
    describe('Set the name and get the name' , function(){
        it('It should return "Luyolo", once Luyolo has been entered from the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('Luyolo');
            assert.equal('Luyolo', greetExercise.getName());

        });
        it('It should return "Lusanda", once Lusanda has been entered from the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('lusanda');
            assert.equal('Lusanda', greetExercise.getName());

        });
        it('It should return "Lukhanyo", once Lukhanyo has been entered from the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('LUKHANYO');
            assert.equal('Lukhanyo', greetExercise.getName());

        });
    });

    describe('Greet the user' , function(){
        it('Should greet Lusanda in English, if English radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('lusanDA');
            greetExercise.greetMe('english')

            assert.equal('Hello, Lusanda', greetExercise.greetMe('english'));

        });
        it('Should greet Lusanda in Afrikaans, if Afrikaans radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('lusanDA');
            greetExercise.greetMe('afrikaans')

            assert.equal('Hallo, Lusanda', greetExercise.greetMe('afrikaans'));

        });
        it('Should greet Lusanda in isiXhosa, if isiXhosa radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('lusanDA');
            greetExercise.greetMe('isixhosa')

            assert.equal('Molo, Lusanda', greetExercise.greetMe('isixhosa'));

        });
    });

    describe('Add names to my empty object' , function(){
        it('Should add Lusanda as a key to my empty object and give it a value of 1 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');

            assert.deepEqual({Lusanda: 1}, greetExercise.namesAdded());

        });
        it("Shouldn't add Lusanda if the name is already in my object but rather increment the value of it to 2." , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('lusanda', 'english');
            greetExercise.addNames('lUSAnda', 'english');

            assert.deepEqual({Lusanda: 3}, greetExercise.namesAdded());

        });
        it('Should add Lusanda, Luyolo & Lukhanyo as a key to my empty object and give it a value of 1 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            
            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('luyolo', 'afrikaans');
            greetExercise.addNames('lukhanyo', 'isixhosa');

            assert.deepEqual({Lusanda: 1, Luyolo: 1, Lukhanyo: 1}, greetExercise.namesAdded());

        });
        it('Should add Lusanda, Luyolo & Lukhanyo as a key to my empty object and give it a value of 2 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            
            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('luyolo', 'afrikaans');
            greetExercise.addNames('lukhanyo', 'isixhosa');
            greetExercise.addNames('luSANda', 'isixhosa');
            greetExercise.addNames('lukhanYO', 'English');
            greetExercise.addNames('luYoLo', 'Afrikaans');

            assert.deepEqual({Lusanda: 2, Luyolo: 2, Lukhanyo: 2}, greetExercise.namesAdded());

        });
    });
    describe('Greet counter' , function(){
        it('Should increment the counter from 0 to 1, once Lusanda alone is greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');

            assert.deepEqual(1, greetExercise.getCounter());

        });
        it("Shouldn't increment the counter, once Lusanda is greeted again." , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('lusANDa', 'isixhosa');

            assert.deepEqual(1, greetExercise.getCounter());

        });
        it('Should increment the counter to 2, once Lusanda and Luyolo are greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('luyolO', 'isixhosa');

            assert.deepEqual(2, greetExercise.getCounter());

        });
        it('Should increment the counter to 5, once Lusanda, Sipho, Lukhanyo, Lebo and Luyolo are greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lusanDA', 'english');
            greetExercise.addNames('sipho', 'isixhosa');
            greetExercise.addNames('luKHanyo', 'Afikaans');
            greetExercise.addNames('lEBO', 'Afrikaans');
            greetExercise.addNames('luyolO', 'isixhosa');

            assert.deepEqual(5, greetExercise.getCounter());

        });
    });
});