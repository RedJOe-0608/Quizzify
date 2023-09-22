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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 15,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 15,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 10,
                            exerciseStatus: "passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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
                            exerciseNo: 1,
                            exerciseScore: 0,
                            exerciseStatus: "not passed"
                        },
                        {
                            exerciseNo: 2,
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