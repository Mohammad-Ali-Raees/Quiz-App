
// Questions Array
const QuestionArray = [
    {
        question: "Which of the following is the correct syntax for a JSON object?",
        options: [
            "{'name': 'John', 'age': 30}",
            '{"name": "John", "age": 30}', // Correct
            "{name: \"John\", age: 30}",
            "(\"name\": \"John\", \"age\": 30)"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct file extension for a JSON file?",
        options: [
            ".jsn",
            ".json", // Correct
            ".txt",
            ".xml"
        ],
        correctAnswer: 1
    },
    {
        question: "In JSON, how are values separated from keys?",
        options: [
            "Colon (:)", // Correct
            "Equal sign (=)",
            "Semicolon (;)",
            "Comma (,)"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you represent an array in JSON?",
        options: [
            "With parentheses ()",
            "With curly braces {}",
            "With double quotes \"\"",
            "With square brackets []" // Correct
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a valid JSON string?",
        options: [
            "\"name\": \"John\", \"age\": 30", // Incorrect (missing braces)
            "{\"name\": \"John\", \"age\": 30}", // Correct
            "{name: John, age: 30}",
            "(\"name\": \"John\", \"age\": 30)"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method is used to convert a JavaScript object into a JSON string?",
        options: [
            "JSON.parse()",
            "JSON.stringify()", // Correct
            "JSON.convert()",
            "JSON.toString()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()", // Correct
            "JSON.stringify()",
            "JSON.decode()",
            "JSON.toObject()"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a valid way to represent `null` in JSON?",
        options: [
            "null", // Correct
            "\"null\"",
            "NULL",
            "None"
        ],
        correctAnswer: 0
    },
    {
        question: "What data format is JSON primarily based on?",
        options: [
            "XML",
            "YAML",
            "JavaScript", // Correct
            "HTML"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following data types is NOT supported in JSON?",
        options: [
            "Number",
            "Date", // Correct
            "Boolean",
            "Array"
        ],
        correctAnswer: 1
    }


];




let QuestionIndex = 0; //? Array Index
let Score = 0; //? Array Scrore


//* Function to show arrays in HTML
function ShowQuestion() {

    const elements = QuestionArray[QuestionIndex]; //* Qustions array have complete array , i have only add index
    document.querySelector('.Question').innerHTML = elements.question; //* Append array in HTML


    const answers = document.querySelectorAll("label"); //* Get all labels
    answers.forEach((elem, index) => { //* i have loop an all QuerySelectors of labels
        elem.innerHTML = elements.options[index] //* just add all labels number in given array
    })


}


//* Get All Labels
document.querySelectorAll('label').forEach(elem => {
    elem.addEventListener('click', (e) => {
        const elements = QuestionArray[QuestionIndex]; // Get the current question
        const userClicked = e.target.innerHTML.trim(); // Get the clicked answer text and remove extra spaces

        // Find the index of the clicked answer in the options array
        const clickedIndex = elements.options.findIndex(elem => elem === userClicked);


        if (clickedIndex === elements.correctAnswer) {
            Score++
        } else {
            console.log("Wrong answer!");
        }
    })
})

//* when complete quiz render results function
function CompleteQuiz() {
    let html = `<div class="card-body">
                <h5 class="card-title display-4">Your Quiz Results</h5>
                <p class="score" id="totalScore">${Score++}</p> 
              <button type="button" class="btn btn-light Retake" onclick="Retake()">Retake Quiz</button>
                </div>`;

    document.querySelector(".Result").innerHTML = html
}

//* Reload Quiz Again
function Retake() {
    location.reload();
}



//* When radio checked , this function will uncheck
function Unchecked() {
    document.querySelectorAll("input").forEach(elem => {
        elem.checked = false
    })
}

//* Display next quiz question
document.querySelector('.NextQuestion').addEventListener('click', (e) => {
    Unchecked() //* Call an uncheck function
    if (QuestionIndex < QuestionArray.length - 1) { //? when quiz index is less than quiz array // or check array length is -1 
        QuestionIndex++ //* Increase Index
        ShowQuestion() //* Call Next question function
    } else {
        //* when array end display change button text from next to submit

        CompleteQuiz() //* when array complete render result function

    }
})







ShowQuestion()