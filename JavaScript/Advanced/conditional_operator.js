// const myAge = 7
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!'

const myAge = 6 
const showPage = () => ('Showing the page')

const showErrorPage = () => ('Showing the error page')


const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const  team = ['Tyler', 'Porter']
const teamSize = team.length
const teamError = () => ('Too many people on your team')

const teamMessage = teamSize <= 4 ? teamSize : teamError()
console.log(teamMessage)