function Random(){
    var text = ["The best revenge is massive success.","Do not take life too seriously. You will not get out alive."
    ,"You miss 100% of the shots you don't take.","It's not what happens to you, but how you react to it that matters."
    ,"Resentment is like drinking poison and waiting for your enemies to die."]
    var userName = ['Frank Sinatra','Elbert Hubbard','Wayne Gretzy','Epictetus','Nelson Mandela']
    var random = Math.floor(Math.random()* userName.length)
    document.getElementById('Text').innerHTML = `"${text[random]}"`
    document.getElementById('Name').innerHTML = `${'--'+userName[random]}`
}