import bcrypt from "bcryptjs"

const users = [
    {
        name: "Joe",
        email:"joe@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
        javascript: {
            progress: 0,
            level: [
                {
                    levelNo: 1,
                    ex: [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
                {
                    levelNo: 2,
                    ex: [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 0,
        },
        python: {
            progress: 1,
            level: [
                {
                    levelNo: 1,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 15,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                    ],
                    
                levelStatus: "passed",
                levelScore: 25,
                isCompleted: true
                },
                {
                    levelNo: 2,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 25,
        },
        react: {
            progress: 1,
            level: [
                {
                    levelNo: 1,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                    ],
                    
                levelStatus: "passed",
                levelScore: 20,
                isCompleted: true
                },
                {
                    levelNo: 2,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
                {
                    levelNo: 3,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 20,
        },
    },
    {
        name: "Admin User",
        email:"admin@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
        javascript: {
            progress: 0,
            level: [
                {
                    levelNo: 1,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
                {
                    levelNo: 2,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 0,
        },
        python: {
            progress: 0,
            level: [
                {
                    levelNo: 1,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 15,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                    ],
                    
                levelStatus: "passed",
                levelScore: 25,
                isCompleted: true
                },
                {
                    levelNo: 2,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 25,
        },
        react: {
            progress: 1,
            level: [
                {
                    levelNo: 1,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                    ],
                    
                levelStatus: "passed",
                levelScore: 20,  
                isCompleted: true
                },
                {
                    levelNo: 2,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
                {
                    levelNo: 3,
                    ex:
                    [
                        {
                            exerciseNumber: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNumber: 2,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                    ],
                    
                levelStatus: "not passed",
                levelScore: 0,
                isCompleted: false
                },
            ],
            overallScore: 20,
        },
    },
]

export default users