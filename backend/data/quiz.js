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
                                question: "On What engine does Js run?",
                                options: [
                                   { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: "d",
                                score: 5
                            },
                            {
                                questionNumber: 2,
                                question: "What kind of database is MONGODB?",
                                options: [
                                   { "a": "SQL",},
                                   { "b": "NO SQL",},
                                   { "c": "MY SQL",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                   { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 1 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                   { "b": "NO SQL",},
                                   { "c": "MY SQL",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 2 Exercise 1 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 2 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
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
                                question: "Level 1 Exercise 1 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                   { "b": "NO SQL",},
                                   { "c": "MY SQL",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 1 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                   { "b": "NO SQL",},
                                   { "c": "MY SQL",},
                                   { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
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
                                question: "Level 2 Exercise 1 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 2 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
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
                                question: "Level 1 Exercise 1 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 1 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 1 Exercise 3 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
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
                                question: "Level 2 Exercise 1 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 2 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                    { "b": "Safari",},
                                    { "c": "Firefox",},
                                    { "d": "v8",},
                                ],
                                correctAnswer: 'd',
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
                                question: "Level 3 Exercise 2 Q1",
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
                                question: "What kind of database is MONGODB?",
                                options: [
                                    { "a": "SQL",},
                                    { "b": "NO SQL",},
                                    { "c": "MY SQL",},
                                    { "d": "None of the above",},
                                ],
                                correctAnswer: 'b',
                                score: 5
                            },
                            {
                                questionNumber: 3,
                                question: "On What engine does Js run?",
                                options: [
                                    { "a": "Chrome",},
                                   { "b": "Safari",},
                                   { "c": "Firefox",},
                                   { "d": "v8",},
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
    }
]

export default quiz