class Formatter {
  static capitalize(string){
    let arr = string.split("")
    let first = arr.shift()
    arr.unshift(first.toUpperCase())
    return arr.join("")
  }

  static sanitize(string){
    return string.replace(/[^-, 'A-Za-z0-9]+/g, '');
  }

  static titleize(string){
    let noWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(" ")
    let cap = arr.map(word => {
      if (noWords.includes(word)) {
        return word
      } else {
      let nar = word.split("")
      let first = nar.shift()
      nar.unshift(first.toUpperCase())
      return nar.join("")
      }
    })
    let faff = cap.join(" ")
    let meh = faff.split("")
    let rarr = meh.shift()
    meh.unshift(rarr.toUpperCase())
    return meh.join("")
  }
}