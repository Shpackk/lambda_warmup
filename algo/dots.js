const addDots = str => {
    let answer = [str[0]]
    for (let i = 1; i < str.length; i++) {
        answer = [...answer.map(char => char + '.'), ...answer].map(char => char + str[i])
    }
    return answer
}

console.log(addDots('abc'))