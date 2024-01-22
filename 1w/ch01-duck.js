function horn(car) {
    console.log("".concat(car.name, "\uC774 \uACBD\uC801\uC744 \uC6B8\uB9BD\uB2C8\uB2E4!"));
}
var truck = {
    name: "포드",
    power: 100,
};
horn(truck);
var obj = {
    name: "오브젝트",
};
horn(obj);
