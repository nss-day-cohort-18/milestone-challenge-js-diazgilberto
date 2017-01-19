var charInput = document.getElementsByName('tree-char')[0]
var heightInput = document.getElementsByName('tree-height')[0]
var elements = {}

/**
* @function getValues
* @return {object} {height, character(e.i. #)}
*/
function getValues () {
    // Getting the values
  var charValue = charInput.value
  var heightValue = heightInput.value

    // Validating that variables have values.
  if (heightValue && charValue) {
    elements.currentHeight = heightValue
    elements.currentChar = charValue
  } else {
    // Empty object and alerting the user.
    alert('Both fields must have a value.')
    elements = {}
  }
  return elements
}

/**
* @function onEnter
* @param  {event} e {Listen for the enter key}
* @return {call backs} {Runs getValues() and growTree()}
*/
function onEnter (e) {
  if (e.keyCode === 13) {
    getValues()
    growTree(elements)
  }
}

// Listen for the enter key
function onClick () {
  getValues()
  growTree(elements)
}

/**
* @function growTree
* @param  {object} elements {height, character(e.i. #)}
* @return {console.log()} {Prints to the console the tree.}
*/
function growTree (elements) {
  var height = elements.currentHeight
  var symbol = elements.currentChar

  for (var i = 0; i < height; i++) {
    var str1 = ''
    var str2 = ''
    for (var j = height - 1; j >= i; j--) {
      str1 += ' '
      if (j === i) {
        for (var z = (i * 2) + 1; z > 0; z--) {
          str2 += symbol
        }
      }
    }
    console.log(str1 + str2)
  }
}
