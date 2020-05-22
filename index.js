class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(sentence) {
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let brokenSentence = sentence.split(" ")
    let titleSentence = []

    for (let i = 0; i < brokenSentence.length; i++) {
      if (i === 0) {
        titleSentence.push(this.capitalize(brokenSentence[i]))
      } else {
        if (array.includes(brokenSentence[i])) {
          titleSentence.push(brokenSentence[i])
        } else {
          titleSentence.push(this.capitalize(brokenSentence[i]))
        }
      }
    }
    return titleSentence.join(" ")
  }
}
