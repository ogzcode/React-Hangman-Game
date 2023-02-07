function getCharList() {
    let list = [];

    for (let i = 65; i < 91; i++) {
        list.push(String.fromCharCode(i));
    }
    return list;
}

export default getCharList;