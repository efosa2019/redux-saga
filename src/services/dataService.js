import serviceApi from "./api";

export function getAllData() {
    return getData('./data.json');
}

function getData(endpoint) {
    const delay = (0.5 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            serviceApi.get(endpoint)
                .then(res => {
                    resolve(res.data);
                })
                .catch(e => reject(new Error(e)));
        }, delay);
    });
}