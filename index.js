const name = ['Aki', 'Samip']

function introduction(name) {
 return (`Hi, my name is ${name}.`);
}


const language = ['Ember.js' , 'React']

function introductionWithLanguage(name , language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)


}

function introductionWithLanguageOptional(name= "Gracie" , language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

