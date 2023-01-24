export function getIds(data) {
    let ids = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        ids.push(item.id);
    }
    return ids
}

export function getData(data, id) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.id === id) {
            return item;
        }
    }
}
