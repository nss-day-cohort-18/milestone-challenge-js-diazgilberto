var charInput = document.getElementsByName('tree-char')[0];
var heightInput = document.getElementsByName('tree-height')[0];
var elements = {};



/**
 * Gets the height and character to 
 * print from the user inputs.
 */
function getValues() {

    // Getting the values
    var charValue = charInput.value;
    var heightValue = heightInput.value;

    // Validating that variables have values.
    if(heightValue && charValue) {
        elements.currentHeight = heightValue;
        elements.currentChar = charValue;
    } else {
        // Empty object and alerting the user.
        alert('Both fields must have a value.');
        elements = {};
    }
    return elements;
}



/**
 * Listening for the enter key.
 * 
 *  @param:     {event}
 */
function onEnter(e) {
    if(e.keyCode == 13) {
        getValues();
        growTree(elements);
    }
}



/**
 * Functions executes once the 
 * user clicks the botton.
 */
function onClick() {
    getValues();
    growTree(elements);
}



/**
 * Function that prints to the console
 * character in a tree shape.
 * 
 *  @param:     {object}    {key: currentHeight, key: currentChar}
 *  @return:    {Prints to console currentChar in tree shape.}
 */
function growTree(elements) {
    var height = elements.currentHeight;
    var symbol = elements.currentChar;

    for (var i = 0; i < height; i++) {
        var str1 = '';
        var str2 = ''
        for (var j = height - 1; j >= i; j--) {
            str1 += ' ';
            if (j == i) {
                for(var z = (i*2)+1; z > 0; z--) {
                    str2 += symbol;
                }
            }
        }
        console.log(str1 + str2);
    }
}