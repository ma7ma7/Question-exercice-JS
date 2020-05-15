/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
    var Question = function(question, responses, correctAnswer) {
        this.question = question;
        this.responses = responses;
        this.correctAnswer = correctAnswer
    }

    Question.prototype.getQuestion = function() {

        console.log(this.question + ' ?');
        for(var i = 0; i <  this.responses.length; i++) {
            console.log(this.responses[i].id + ' : ' + this.responses[i].response);
        }
    }

    Question.prototype.checkAnswer = function (enterd) {
        if (enterd == this.correctAnswer) {
            console.log('You are correct')
        }
    }

    var questOne = new Question(
        'What is hoisting',
        [
            {
                id: 0,
                response: 'Is a toy'
            },
            {
                id: 1,
                response: 'is the way of calling functions and variables'
            },
            {
                id: 2,
                response: 'is an unsusfull feature'
            }
        ],
        1
    );


    var questTwo = new Question(
        'Is JS Fun',
        [
            {
                id: 0,
                response: 'Yes'
            },
            {
                id: 1,
                response: 'No'
            }
        ],
        0
    );


    var questThree = new Question(
        'What is my name',
        [
            {
                id: 0,
                response: 'Jalal'
            },
            {
                id: 1,
                response: 'mahmoud'
            },
            {
                id: 2,
                response: 'ussef'
            }
        ],
        1
    );

    var arrayQuest = [questOne, questTwo, questThree];
    var n = Math.floor(Math.random() * arrayQuest.length);

    arrayQuest[n].getQuestion();

    var answer = parseInt(
            prompt("Select the correct Answer ? (Enter a number)")
        );
    arrayQuest[n].checkAnswer(answer);

})();