function checkName(name) {

    if(typeof name !== 'string')
    {
        return "invalid";
    }
    const len = name.length ;
    const names = name.toLowerCase();
    if(names[len-1] === 'a'||names[len-1] === 'y' ||names[len-1] === 'i' ||names[len-1] === 'e' ||names[len-1] === 'o' ||names[len-1] === 'u'||names[len-1] === 'w'){
        return "Good Name";
    }
    else {
        return "Bad Name";
    }

}
const testcase = checkName('RAFEE');
console.log(testcase);