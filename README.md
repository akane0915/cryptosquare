| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|The program will make all input lower case| TeSt | test |
|The program will remove all spaces| this is a test | thisisatest |
|The program will remove all punctuation| this, is, a, test! | thisisatest |
|The program will find the length of the user's input| n/a | n/a |
|The program will check if the length is a perfect square or not| n/a | n/a |
|Four character Strings|||
|For strings with four characters the program will input each character into a 2d array with a length of two and a width of two| test | var 2dArray = [["t","e"],["s", "h"]] |
|The program will create a new array with the first element from 2dArray[0][0], the second element from 2dArray[0][1], the third element from 2dArray[1][0], the fourth element from 2dArray[1][1] | tesh | encryptedArray = ["t","s","e","h"]|
|Nine character Strings|||
|For strings with 9 characters the program will input each character into a 2d array with a length of three and a width of three| abcdefghi | array = [["a","b","c"],["d","e","f"],["g","h","i"]]|
|The program will create an encrypted array from 2dArray[[0][0],[0][1],[0][2],[1][0],[1][1],[1][2],[2][0],[2][1],[2][2]] | abcdefghi | encryptedArray = ["a","d","g","b","e","h","c","f","i"]|
|Strings with perfect square character length|||
|For strings that have a perfect square length, the program will input each character into a 2d array of length/width equal to the square root of the number of characters.| abcdefghijklmnop | array = [["a","b","c","d"],["e","f","g","h"],["i","j","k","l"],["m","n","o","p"]]|
