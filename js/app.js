/* TO DO

Point system: Conditional statement?

Wireframe 1 rendering
Event listeners

Wireframe 2 rendering
Event listeners

Wireframe 3 rendering
Event listeners

Wireframe 4 rendering

Two functions for rendering

Conditional statement for round numbers: if or switch

Results page: local storage

add text to page 2

*/
const openingText = 'You are a coding student in bootcamp, green and wide eyed. The day is bright and promising. You have yet to have your soul sucked from your body. But just you wait! Today just might be the day!';
const optionsTextPage1 = 'You realize you still have to study for the exam, but also, your tummy is grumbling.';
const option1Page2Text = 'You must nourish your body, you decide to cook yourself a well balanced meal.';
const option2Page2Text = 'You tell Mr. Instructor, "I am but a soldier and what I do is follow orders" and bid him farewell. And then you go home, open your laptop, and study like the goody two shoes you are.';

function StoryOptionsObject(text, img, option1, option2) {
    this.text = text;
    this.img = img;
    this.option1 = option1;
    this.option2 = option2;
}

function StoryOutcomeObject(text, img) {
    this.text = text;
    this.img = img;
}

const openingPage = new StoryOutcomeObject(openingText, 'img/Classroom1.jpg');
const optionsPage1 = new StoryOptionsObject(optionsTextPage1, 'img/Classroom1.jpg', 'Eat', 'Study');
const option1Page2Object = new StoryOutcomeObject(option1Page2Text, 'img/Cooking.jpg');
const option2Page2Object = new StoryOutcomeObject(option2Page2Text, 'img/Studying.jpg');
console.log(option2Page2Object)

const start =

{
    start:
    {
        img:
            [
                'img/Classroom1.jpg'
            ],
        text:
            [
                "You are a coding student in bootcamp, green and wide eyed. The day is bright and promising.",
                "You have yet to have your soul sucked from your body. But just you wait! Today just might be the day!"
            ],

        nextText:
            [
                "You realize you still have to study for the exam, but also, your tummy is grumbling."

            ],

        choices:
            [
                {
                    buttonText: "Eat",
                    text: "You must nourish your body, you decide to cook yourself a well balanced meal.",
                    nextState: 'examTimeFull',
                },

                {
                    buttonText: "Study",
                    text:
                        [
                            "You tell Mr. Instructor, ‘I am but a soldier and what I do is follow orders.’ and bid him farewell.",
                            "You then you go home, open your laptop, and study like the goody two shoes you are."
                        ],

                    nextState: 'examTimePrepared',
                }

            ],
    }
}

const startButton = document.createElement('button');

makeElement(startButton, 'startButton');
startButton.textContent = 'start';
startButton.addEventListener('click', initGame)

function makeElement(element, parentElementIdString) {
    parentElement = document.getElementById(parentElementIdString);
    parentElement.appendChild(element);

}


function homepage() {

    const h1 = document.createElement('h1');
    makeElement(h1, 'header');
    h1.textContent = 'CHOOSE YOUR FATE';


    const h2 = document.createElement('h2');
    makeElement(h2, 'header2');
    h2.textContent = 'Coding Bootcamp: Enter If You Dare';
}

function initGame() {
    // Get references to the elements you want to remove
    const header = document.getElementById('header');
    const header2 = document.getElementById('header2');
    const startButton = document.getElementById('startButton');
    // Remove the elements
    header.remove();
    header2.remove();
    startButton.remove();
    // Continue with the rest of your game setup
    rendergames(openingPage, optionsPage1, option1Page2Object, option2Page2Object);
    // Source: ChatGPT
}

// function initOptions () {
//     const button = document.createElement('button');
//     makeElement(button,'text');
//     button.textContent = state.buttonText;
// }
function rendergames(storyOutcomeObject, nextOptionsObject, nextStoryOutcome1, nextStoryOutcome2) {
    const textcontainer = document.getElementById('text');
    textcontainer.innerHTML = '';

    const p = document.createElement('p');
    p.setAttribute('id', 'p');
    makeElement(p, 'text');
    p.classList.add('page1');
    p.textContent = storyOutcomeObject.text;

    const arrow = document.createElement('img');
    makeElement(arrow, 'text');
    arrow.setAttribute('src', 'img/arrow.jpg');
    arrow.setAttribute('id', 'arrow');
    arrow.classList.add('pageArrow');
    arrow.addEventListener('click', function () {
        if (storyOutcomeObject) {
        createChoices(nextOptionsObject, nextStoryOutcome1, nextStoryOutcome2);
        } else {
            resetPage();
        }
    });

    const picture = document.createElement('img');
    picture.setAttribute('id', 'picture');
    makeElement(picture, 'container');
    picture.classList.add('page1');
    console.log(storyOutcomeObject.img)
    picture.setAttribute('src', storyOutcomeObject.img);

}

function createChoices(storyOptionsObject, nextStoryOutcome1, nextStoryOutcome2) {


    const lastP = document.getElementById('p');
    lastP.remove();
    const lastArrow = document.getElementById('arrow');
    lastArrow.remove();
    const lastImg = document.getElementById('picture');
    lastImg.remove();

    const picture = document.createElement('img');
    picture.setAttribute('id', 'picture');
    makeElement(picture, 'container');
    picture.classList.add('page1');
    picture.setAttribute('src', storyOptionsObject.img);

    const p = document.createElement('p');
    p.setAttribute('id', 'p');
    makeElement(p, 'text');
    p.classList.add('page1');
    p.textContent = storyOptionsObject.text;

    const optionContainer = document.createElement('div');
    makeElement(optionContainer, 'text');
    optionContainer.setAttribute('id', 'buttons');

    const button1 = document.createElement('button');
    makeElement(button1, 'buttons');
    button1.textContent = storyOptionsObject.option1;
    button1.classList.add('button-choice');
    button1.addEventListener('click', function () {
        resetPage();
        rendergames(nextStoryOutcome1);

    })

    const button2 = document.createElement('button');
    makeElement(button2, 'buttons');
    button2.textContent = storyOptionsObject.option2;
    button2.classList.add('button-choice');
    button2.addEventListener('click', function () {
        resetPage();
        rendergames(nextStoryOutcome2);
       
    })


    

}

function resetPage() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    text.innerHTML = '';
    container.innerHTML = '';
}

homepage();

const examTime =
{
    examTimeFull:
    {
        text: "Now it is time to take the exam, but with your tummy full, you are now ready to sleep off your meal."
    },

    examTimePrepared:
    {
        text: "Now it is time to take the exam, you feel confident since you studied but also feel sleepy."
    },

    choices:
        [
            {
                buttonText: "Take Exam",
                text: "You crack your knuckles and prioritize the exam before sleep! You are a Responsible adult!",
                nextState: '?'
            },

            {
                buttonText: "Take a nap",
                text: "You snuggle into bed and close your eyes and think of your long lost love until you fall asleep.",
                nextState: '?'
            },
        ]
}

const endResults =
{

}

// const story = {

//     start: {
//       text: [
//             "It's your first day as a junior coder and you're pretty nervous . . .",
//             "You see a coffee stand to your right and a group gathering for classes. Which do you go to?"
//         ],
//       choices: [
//         {
//           buttontext: "Go get Coffee",
//           text: [

//             "Forget people, you don't like being in a crowd!",
//             "You grab some coffee to wait out the crowd . . ."

//             ],
//           nextState: 'gotCoffee',
//         },
//         {
//           buttontext: "Check the crowd",
//           text: [
//             "You're already wired from the adrenaline of the first day who needs coffee!",
//             "You push through the crowd to see what course you're in . . ."
//           ],
//           nextState: 'checkCrowd',
//         },
//       ],
//     },
// };

