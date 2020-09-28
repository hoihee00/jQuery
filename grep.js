let members = [];

members.push({
    name: "hong",
    point: 80
});
members.push({
    name: "kim",
    point: 100
});
members.push({
    name: "choi",
    point: 95
});
members.push({
    name: "jeong",
    point: 50
});
members.push({
    name: "lee",
    point: 30
});

$(members).each((a, b) => {
    console.log(a, b);
});
console.clear();

let grepMem = $.grep(members, (a, b) => { // a: object, b: index
    console.log(a, b);
    return (a.point > 50 ? a : null); // filter 역할
});
console.log(grepMem); // 3건 반환됨
console.clear();

let sum = $(grepMem).map((a, b) => { // a: index, b: object
    return b.point;
}).get();
console.log("전체 point 값: " + sum);