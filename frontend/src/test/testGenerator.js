const fs = require('fs');

function testGenerator(nameOfTest, numberOfQuestions) {

    if (nameOfTest !== "Pro") {
        console.log("Test is not Generated, as we do not have this theme test yet");
        return;
    }

    const programmingQuestions = [
        {
            id: 1,
            question: "What is the purpose of a constructor in object-oriented programming?",
            options: [
                "a) To initialize class variables",
                "b) To define the behavior of an object",
                "c) To execute code when an object is created",
                "d) To destroy an object after use"
            ],
            correctAnswer: "a) To initialize class variables"
        },
        {
            id: 2,
            question: "What is a closure in JavaScript?",
            options: [
                "a) A function that is declared inside another function",
                "b) A way to access variables outside of a function",
                "c) A method of creating private variables",
                "d) All of the above"
            ],
            correctAnswer: "d) All of the above"
        },
        {
            id: 3,
            question: "What is Git?",
            options: [
                "a) A version control system",
                "b) A programming language",
                "c) An operating system",
                "d) A database management system"
            ],
            correctAnswer: "a) A version control system"
        },
        {
            id: 4,
            question: "What is the output of '2' + 2 in JavaScript?",
            options: [
                "a) '22'",
                "b) '4'",
                "c) 22",
                "d) Error"
            ],
            correctAnswer: "a) '22'"
        },
        {
            id: 5,
            question: "What does the acronym 'API' stand for in programming??",
            options: [
              "a) Automated Programming Interface",
              "b) Advanced Programming Interface",
              "c) Application Programming Interface",
              "d) Automated Program Instruction"
            ],
            correctAnswer: "c) Application Programming Interface"
        },
    ];

    const selectedQuestions = [];
    while (selectedQuestions.length < numberOfQuestions) {
        const randomIndex = Math.floor(Math.random() * programmingQuestions.length);
        const selectedQuestion = programmingQuestions[randomIndex];
        if (!selectedQuestions.some(question => question.id === selectedQuestion.id)) {
            selectedQuestions.push(selectedQuestion);
        }
    }

    const test = {
        name: nameOfTest,
        questions: selectedQuestions,
        author : "Admin",
        creationDate : new Date()
    }

    storeData(test);

    const questionJson = JSON.stringify(test,null,2);

    fs.writeFile("test.json", questionJson, function(err) {
        if (err) {
            return console.log(err);
        }
        console.error("The file was saved!");

        return test;        
    });
}
function storeData (test) {
    console.log("TEST1",test);
}

module.exports = testGenerator;