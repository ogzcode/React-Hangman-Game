function createWord(word) {
    const list = [];

    for (let i of word.split("")) {
        list.push({
            "char": i.toUpperCase(),
            "state": false
        });
    }
    return list;
}

export default createWord;