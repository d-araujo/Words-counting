import fs from 'fs'
//Reading the file and saving it on a var
function readfile(filepath){
    try {
        return fs.promises.readFile(filepath, 'utf8')
    }
    catch (err) {
        console.error('Error reading file:', err)

    }
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



async function main(){
    let fp = await readfile('./bla.txt')
    let sw = separatingWords(fp)
    console.log(wordCounter(sw))
    console.log(fp)
}

main()