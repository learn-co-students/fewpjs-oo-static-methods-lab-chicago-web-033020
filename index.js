class Formatter {
  //add static methods here

  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    let exclusion = ['the','a','an','but','of','and','for','at','by','from']
    let result = []
    let wordArray = string.split(" ")
    for (let i = 0; i < wordArray.length; i++){
      if (i === 0){
        result.push(this.capitalize(wordArray[i]))
      } else{
        if (exclusion.includes(wordArray[i])) {
          result.push(wordArray[i])
        } else {
          result.push(this.capitalize(wordArray[i]))
        }
      }
     }
    return result.join(" ")
  }
}