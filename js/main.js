var heightInput = document.getElementsByTagName('tree-height');
var charInput = document.getElementsByName('tree-char');

var heightValue = heightInput.value;


function growTree(height) {
    for (var i = 0; i < height; i++) {
        var str1 = '';
        var str2 = ''
        for (var j = height - 1; j >= i; j--) {
            str1 += ' ';
            if (j == i) {
                for(var z = (i*2)+1; z > 0; z--) {
                    str2 += '*';
                }
            }
        }
        console.log(str1 + str2);
    }
}
growTree(7);