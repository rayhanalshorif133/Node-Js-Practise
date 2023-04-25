var people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const ages = (age) => {
    if (age < 0) {
        return 0;
    }
    if (age > 100) {
        return 100;
    }
    return age;
}


module.exports = ages;