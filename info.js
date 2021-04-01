const Alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,

}

const Bob = {
firstName: 'Bob',
lastName: 'Lemon',
age: 30,

}

const Charlie = {
firstName: 'Charlie',
lastName: 'Charlot',
age: 8,

}

const printInfo = (somebody) => {
  console.log(somebody)
}

const canVote = (somebody) => {
  if (somebody.age >= 18) {
    console.log(`${somebody.firstName} can vote.`)
    return true
  } else {
    console.log(`${somebody.firstName} can't vote`)
    return false
  }
}

canVote(Charlie)
canVote(Alice)
canVote(Bob)