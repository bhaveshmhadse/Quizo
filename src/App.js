import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [2, 1, 1, 3, 4, 3, 1, 3, 2],
      questions: [
        {
          question: 'What does undefined == null evaluate in Javascript',
          option: ['true', 'false', 'error', 'null'],
          answer: 2,
        },
        {
          question:
            "Person p = new Person('bhavesh',20) What does 'bhavesh' & '20' denote here?",
          option: ['arguments', 'parameters', 'both A & B', 'none'],
          answer: 1,
        },
        {
          question:
            'Student s = new Student() \n What does s and new Student denote here?',
          option: [
            'Reference, Object',
            'Object, Reference',
            'Reference, Reference',
            'both A & B',
          ],
          answer: 1,
        },
        {
          question: 'What is difference between let and var in JS? ',
          option: [
            'let - functional scoped\nvar-functional scoped',
            'let - block scoped\nvar-block scoped',
            'let - block scoped\nvar-functional scoped',
            'both functional scoped',
          ],
          answer: 3,
        },
        {
          question:
            'Guess the output: public boolean guessValue(){\nreturn (1 || 0) && (0 && 0);\n}',
          option: ['true', 'runtime error', 'compile time error', 'false'],
          answer: 4,
        },
        {
          question: 'Which language has the concept of garbage collection?',
          option: ['Javascript', 'Java', 'both Java and Js', 'C++'],
          answer: 3,
        },
        {
          question: 'Which of the following is not a keyword in C++',
          option: ['const', 'var', 'new', 'try'],
          answer: 2,
        },
        {
          question:
            'Person p;\nint s[10];\nbool isSmart;\n what will the following declation look in your favourite language Java & Python',
          option: [
            'Java\n:  Person p = new Person;\nint s[] = new int[10];\nboolean isSmart;\nPython\n :  p = Person()\ns=[]\nisSmart=true',
            'Java\n :  Person p = new Person();\nint[] s = new int();\nboolean isSmart;\nPython\n :  p = new Person()\ns=[]\nisSmart=true',
            'Java\n :  Person p = new Person();\nint[] s = new int[10];\nboolean isSmart;\nPython\n :  p = Person()\ns=[]\nisSmart=True',
            'Java\n :  Person p = Person();\nint[] s = new int[];\nboolean isSmart;\nPython\n :  p = Person\ns=[]\nisSmart=True',
          ],
          answer: 3,
        },
        {
          question:
            'Which of the following method is used to select only those element which satisfies a given condition...',
          option: ['.filter()', '.map()', '.select()', '.forEach()'],
          answer: 1,
        },
        {
          question:
            "What will above expression evaluate to ? : null || 'Bhavesh'",
          option: ['null', 'runtime error', 'Bhavesh', 'compile time error'],
          answer: 3,
        },
        {
          question: 'What is NodeJs',
          option: [
            'Programming Language',
            'Javascript runtime enviornment',
            'Javascript framework',
            'none of the above',
          ],
          answer: 2,
        },
      ],

      colour: ['option', 'option', 'option', 'option'],

      pointer: 0,
      score: 0,
    };
  }

  changeColor = n => {
    this.checkanswer(n);
    let newarrr = ['option', 'option', 'option', 'option'];
    let answer = this.state.questions[this.state.pointer].answer;
    newarrr[answer - 1] = 'g';
    this.setState({ colour: newarrr });
  };

  checkanswer = n => {
    if (n === this.state.questions[this.state.pointer].answer) {
      this.setState({ score: this.state.score + 1 });
    }
  };

  returnRegards = () => {
    let score = this.state.score;
    if (score < 3) {
      alert('Oops!!!, you need more practice buddy :( ' + ' Score: ' + score);
      return;
    }
    if (score < 7) {
      alert(
        'Buddy your score is good but you need more Practice, better luck next time!! ' +
          ' Score: ' +
          score
      );
      return;
    }
    alert(
      'Heyy Buddy your total Score is: ' +
        score +
        ' :)' +
        '\n You are a Pro :) keep Going!'
    );
    return;
  };

  nextQuestion = () => {
    if (this.state.pointer === 9) {
      return this.returnRegards();
    }
    let newarrr = ['option', 'option', 'option', 'option'];
    this.setState({
      colour: newarrr,
      pointer: this.state.pointer + 1,
    });
  };
  render() {
    return (
      <>
        <div className='question'>
          <div className='text'>
            {this.state.questions[this.state.pointer].question}
          </div>
        </div>
        <div className='options'>
          <button
            onClick={() => this.changeColor(1)}
            className={this.state.colour[0]}
          >
            {this.state.questions[this.state.pointer].option[0]}
          </button>
          <button
            onClick={() => this.changeColor(2)}
            className={this.state.colour[1]}
          >
            {this.state.questions[this.state.pointer].option[1]}
          </button>
          <button
            onClick={() => this.changeColor(3)}
            className={this.state.colour[2]}
          >
            {this.state.questions[this.state.pointer].option[2]}
          </button>
          <button
            onClick={() => this.changeColor(4)}
            className={this.state.colour[3]}
          >
            {this.state.questions[this.state.pointer].option[3]}
          </button>
          <div className='score'>
            <h2>Score : {this.state.score}/10</h2>
          </div>
          <button className='next' onClick={this.nextQuestion}>
            NEXT
          </button>
        </div>
      </>
    );
  }
}

export default App;
