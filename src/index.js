module.exports = function check(str, bracketsConfig) {
    let j = 0;
    let arr = str.split('');
    let check1 = (el1, el2, index, arr) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (arr[index] == bracketsConfig[i][0] && arr[index + 1] == bracketsConfig[i][1]) {

                arr.splice(index, 2);
                index = 0;
                i = -1;
            }
        }
        j = index + 1
    }

    while (j < arr.length - 1) {
        check1(arr[j], arr[j + 1], j, arr);
    }

    return (arr.length == 0)
}
