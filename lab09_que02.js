

{
    class Student {
        //holds correct answer or student's answer
        constructor(studentId, answers = []) {
            this.studentId = studentId;
            this.answers = answers;
        }

        addAnswer(question) {
            this.answers.push(question);
        }
    }

    class Question {
        constructor(question, answer) {
            this.question = question;
            this.answer = answer;
        }

        //check if student's answer is correct
        checkAnswer(correctAnswer) {
            returncorrectAnswer.answer === this.answers;
        }
    }

    class Quiz {
        
        constructor(questions = [], students = []) {
            this.question = questions;
            this.students = students;
        }

        //computing quiz score for given student
        scoreStudentBySid(sid) {
            letans = 0;
            this.students
                .find((x) => x.studentId === sid)
                .answers.forEach((x) => {
                    this.question.forEach((y) => {
                        if (y.question === x.question && y.answer === x.answer) {
                            ans++;
                        }
                    });
                });
            returnans;
        }

        // computing average score
        getAverageScore() {
            letsum = 0;
            this.students.forEach(x => {
                sum += this.scoreStudentBySid(x.studentId)
            });

            returnsum / this.students.length;
        }
    }

    conststudent1 = newStudent(10);
    student1.addAnswer(newQuestion(2, "a"));
    student1.addAnswer(newQuestion(3, "b"));
    student1.addAnswer(newQuestion(1, "b"));

    conststudent2 = newStudent(11);
    student2.addAnswer(newQuestion(3, "b"));
    student2.addAnswer(newQuestion(2, "a"));
    student2.addAnswer(newQuestion(1, "d"));

    conststudents = [student1, student2];

    constquestions = [
        newQuestion(1, "b"),
        newQuestion(2, "a"),
        newQuestion(3, "b"),
    ];

    constquiz = newQuiz(questions, students);
    letscoreforStudent10 = quiz.scoreStudentBySid(10);
    console.log(scoreforStudent10);

    letscoreforStudent11 = quiz.scoreStudentBySid(11);
    console.log(scoreforStudent11);

    letaverage = quiz.getAverageScore();
    console.log('Average is: ' + average); //printing the avg

}