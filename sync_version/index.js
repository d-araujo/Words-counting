import fs from 'fs'
//Reading the file and saving it on a var
function readfile(filepath){
    return fs.readFileSync(filepath, 'utf8')
}

function separatingWords(text){
    const regex= /^[\p{L}]+$/u

    let words=text.split(' ')

    let onlyWords=[]

    for(let i=0; i < words.length; i++){

        if(regex.test(words[i]))
        {
            onlyWords.push(words[i])
        }

    }
    return onlyWords
} 

function wordCounter(wordsList){
    return wordsList.length
}



function main(){
    let fp = readfile('./bla.txt')
    let sw = separatingWords(fp)
    console.log(wordCounter(sw))
    console.log(fp)
}

main()