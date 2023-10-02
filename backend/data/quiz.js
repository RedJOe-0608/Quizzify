const quiz = [
    {
        // _id: '1',
        name: 'JavaScript Quiz',
        image: '/images/javascript-icon.png',
        description:
          'Test your skills and knowledge in JavaScript!',
          totalLevels: 2,
        yourProgress: 0,
        level: [
            {
                levelNumber: 1,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following keywords is used to define a variable in Javascript?",
                                options: [
                                   { "a": "var",},
                                   { "b": "let",},
                                   { "c": "Both A and B",},
                                   { "d": "None Of The Above",},
                                ],
                                correctAnswer: "c",
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which of the following methods is used to access HTML elements using Javascript?",
                                options: [
                                   { "a": "getElementById()",},
                                   { "b": "getElementsByClassName()",},
                                   { "c": "Both A and B",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "What keyword is used to check whether a given property is valid or not?",
                                options: [
                                   { "a": "in",},
                                   { "b": "is in",},
                                   { "c": "exists",},
                                   { "d": "lies",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "What is the use of the <noscript> tag in JavaScript?",
                                options: [
                                    { "a": "The Contents Are Displayed By Non-Js based browsers",},
                                   { "b": "Clears all the cookies and cache",},
                                   { "c": "Both A and B",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
                                options: [
                                    { "a": "Boolean",},
                                   { "b": "Undefined",},
                                   { "c": "Object",},
                                   { "d": "Integer",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Arrays in JavaScript are defined by which of the following statements?",
                                options: [
                                    { "a": "It is an ordered list of values",},
                                   { "b": "It is an ordered list of objects",},
                                   { "c": "It is an ordered list of string",},
                                   { "d": "It is an ordered list of functions",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ],
            },
            {
                levelNumber: 2,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following is not javascript data types?",
                                options: [
                                    { "a": "Null type",},
                                   { "b": "Undefined type",},
                                   { "c": "Number type",},
                                   { "d": "All of the mentioned",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
                                options: [
                                    { "a": "Position",},
                                    { "b": "Window",},
                                    { "c": "Standard",},
                                    { "d": "Location",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Which of the following can be used to call a JavaScript Code Snippet?",
                                options: [
                                    { "a": "Function/Method",},
                                    { "b": "Preprocessor",},
                                    { "c": "Triggering Event",},
                                    { "d": "RMI",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following scoping type does JavaScript use?",
                                options: [
                                    { "a": "Sequential",},
                                    { "b": "Segmental",},
                                    { "c": "Lexical",},
                                    { "d": "Literal",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "What is the basic difference between JavaScript and Java?",
                                options: [
                                    { "a": "Functions are considered as fields",},
                                    { "b": "Functions are values, and there is no hard distinction between methods and fields",},
                                    { "c": " Variables are specific",},
                                    { "d": "There is no difference",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Why JavaScript Engine is needed?",
                                options: [
                                    { "a": "Both Compiling & Interpreting the JavaScript",},
                                    { "b": " Parsing the javascript",},
                                    { "c": "Interpreting the JavaScript",},
                                    { "d": "Compiling the JavaScript",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
        ]
    },
    {
        // _id: '2',
        name: 'Python Quiz',
        image: '/images/python-icon.png',
        description:
          'Test your skills and knowledge in Python!',
          totalLevels: 2,
          yourProgress: 1,
        level: [
            {
                levelNumber: 1,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Who developed Python Programming Language?",
                                options: [
                                    { "a": "Wick van Rossum",},
                                    { "b": "Rasmus Lerdorf",},
                                    { "c": "Guido van Rossum",},
                                    { "d": "Niene Stom",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which type of Programming does Python support?",
                                options: [
                                    { "a": "object-oriented programming",},
                                   { "b": "structured programming",},
                                   { "c": "functional programming",},
                                   { "d": "all of the mentioned",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: " Is Python case sensitive when dealing with identifiers?",
                                options: [
                                    { "a": "no",},
                                   { "b": "yes",},
                                   { "c": "machine dependent",},
                                   { "d": "none of the mentioned",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following is not a keyword in Python language?",
                                options: [
                                    { "a": "val",},
                                   { "b": "raise",},
                                   { "c": "try",},
                                   { "d": "with",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which of the following is the correct extension of the Python file?",
                                options: [
                                    { "a": ".python",},
                                   { "b": ".pl",},
                                   { "c": ".py",},
                                   { "d": ".p",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "All keywords in Python are in _________",
                                options: [
                                    { "a": "Capitalized",},
                                   { "b": " lower case",},
                                   { "c": "UPPER CASE",},
                                   { "d": "None of the mentioned",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
            {
                levelNumber: 2,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following is used to define a block of code in Python language?",
                                options: [
                                    { "a": "Indentation",},
                                    { "b": "Key",},
                                    { "c": "Brackets",},
                                    { "d": "All of the mentioned",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which keyword is used for function in Python language?",
                                options: [
                                    { "a": "Function",},
                                    { "b": "def",},
                                    { "c": "Fun",},
                                    { "d": "Define",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "What does pip stand for python?",
                                options: [
                                    { "a": "Pip Installs Python",},
                                   { "b": "Pip Installs Packages",},
                                   { "c": "Preferred Installer Program",},
                                   { "d": "All of the mentioned",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following functions is a built-in function in python?",
                                options: [
                                    { "a": "factorial()",},
                                    { "b": "print()",},
                                    { "c": "seed()",},
                                    { "d": "sqrt()",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "What will be the output of the following Python function?    min(max(False,-3,-4), 2,7)",
                                options: [
                                    { "a": "-4",},
                                    { "b": "-3",},
                                    { "c": " 2",},
                                    { "d": "False",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Which of the following is not a core data type in Python programming?",
                                options: [
                                    { "a": "Tuples",},
                                    { "b": "Lists",},
                                    { "c": "Class",},
                                    { "d": "Dictionary",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
        ]
    },
    {
        // _id: '3',
        name: 'React Quiz',
        image: '/images/react-icon.png',
        description: 'Test your skills and knowledge in React!',
        totalLevels: 3,
        yourProgress: 1,
        level: [
            {
                levelNumber: 1,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "What is React.js?",
                                options: [
                                    { "a": "Open-source JavaScript back-end library",},
                                   { "b": "JavaScript front-end library to create a database",},
                                   { "c": "Free and open-source JavaScript front-end library",},
                                   { "d": "None of the mentioned",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which of the following acts as the input of a class-based component?",
                                options: [
                                    { "a": "Class",},
                                    { "b": "Props",},
                                    { "c": "Factory",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "How many elements can a valid react component return?",
                                options: [
                                    { "a": "React doesn’t return element",},
                                    { "b": "1 Element",},
                                    { "c": "More than 1 element",},
                                    { "d": "None of the mentioned",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Which of the following is method is not a part of ReactDOM?",
                                options: [
                                    { "a": "ReactDOM.hydrate()",},
                                   { "b": "ReactDOM.destroy()",},
                                   { "c": "ReactDOM.createPortal()",},
                                   { "d": "All of the mentioned",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which ReactJS function renders HTML to the web page?",
                                options: [
                                    { "a": "render()",},
                                    { "b": "ReactDOM.render()",},
                                    { "c": "renders()",},
                                    { "d": "ReactDOM.renders()",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "JSX stands for _____.",
                                options: [
                                    { "a": "JSON",},
                                   { "b": "JSON XML",},
                                   { "c": "JavaScript XML",},
                                   { "d": "JavaScript and AngularJS",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 3,
                        questions: [
                            {
                                questionNumber: 1,
                                question: " JSX allows us to write _____.",
                                options: [
                                    { "a": "jQuery in React",},
                                    { "b": "Angular Code in React",},
                                    { "c": "MySQL in React",},
                                    { "d": "HTML in React",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "Which ReactJS command is used to create a new application?",
                                options: [
                                    { "a": "create-react-app",},
                                    { "b": "new-react-app",},
                                    { "c": "create-new-reactapp",},
                                    { "d": "react-app",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "ES6 stands for ____.",
                                options: [
                                    { "a": "ECMAScript 6",},
                                   { "b": "Extended-JavaScript Version 6",},
                                   { "c": "Extensive-JavaScript 6",},
                                   { "d": "Expanded-JavaScript 6",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
            {
                levelNumber: 2,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "In ES6 – Which keyword is used for class inheritance?",
                                options: [
                                    { "a": "extends",},
                                   { "b": "extend",},
                                   { "c": "inheritance",},
                                   { "d": "inheritances",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: " In ES6 – let is the block scoped version of ____.",
                                options: [
                                    { "a": "const",},
                                    { "b": "function",},
                                    { "c": "var",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Which method is used to generate lists?",
                                options: [
                                    { "a": "map()",},
                                   { "b": "generate()",},
                                   { "c": "new()",},
                                   { "d": "filter()",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "What is the default port where webpack-server runs?",
                                options: [
                                    { "a": "443",},
                                    { "b": "3030",},
                                    { "c": "3306",},
                                    { "d": "8080",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "What are components in ReactJS?",
                                options: [
                                    { "a": "Components are like functions that return HTML elements.",},
                                    { "b": "Components are the HTML elements.",},
                                    { "c": "Components are the set of variables defined in ReactJS.",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "What of the following is used in React.js to increase performance?",
                                options: [
                                    { "a": "Original DOM",},
                                    { "b": "Virtual DOM",},
                                    { "c": "Both A and B.",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
            {
                levelNumber: 3,
                exercises: [
                    {
                        exerciseNumber: 1,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "Level 3 Exercise 1 Q1",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "What is the use of webpack command in React.js?",
                                options: [
                                    { "a": "The webpack command is used to transpile all the JavaScript down into one file.",},
                                   { "b": "It runs React local development server.",},
                                   { "c": "It is a module bundler.",},
                                   { "d": "None of the above.",},
                                ],
                                correctAnswer: 'c',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "Why is the usage of setState?",
                                options: [
                                    { "a": "Invoke code after the setState operation is done.",},
                                    { "b": "Replace the state completely instead of the default merge action.",},
                                    { "c": "Access the previous state before the setState operation.",},
                                    { "d": "None of the above.",},
                                ],
                                correctAnswer: 'a',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                    {
                        exerciseNumber: 2,
                        questions: [
                            {
                                questionNumber: 1,
                                question: "How can you set a default value for an uncontrolled form field?",
                                options: [
                                    { "a": "By using the value property",},
                                    { "b": "By using the defaultValue property",},
                                    { "c": "By using the default property",},
                                    { "d": "It is assigned automatically.",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "We can update the state in React.js by calling to setState() method. These calls are:",
                                options: [
                                    { "a": "Synchronous in nature.",},
                                    { "b": "Asynchronous in nature.",},
                                    { "c": "Are asynchronous but can be made synchronous when required.",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "What is true for the keys given to a list of elements in React?",
                                options: [
                                    { "a": "Unique in the DOM.",},
                                   { "b": "Unique among the siblings only.",},
                                   { "c": "Do not require to be unique.",},
                                   { "d": "None of the above.",},
                                ],
                                correctAnswer: 'b   ',
                                score: 5
                            },
                        ],
                        exercisePassScore: 10
                    },
                ]
            },
        ]
    }
]

export default quiz