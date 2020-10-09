export const hashtags = (text) => {
  let splitWords = text.split(" ")
  console.log(splitWords)
  let newArray = new Array();
  //(console.log(newArray)
  splitWords.forEach(item => {
    if (item.charAt(0) === "#") {
      newArray.push(item);
    }

  });
  text = newArray;
  return text
}
 
