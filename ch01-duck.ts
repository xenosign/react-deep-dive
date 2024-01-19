type Car = { name: string };
type Truck = Car & { power: number };

function horn(car: Car) {
  console.log(`${car.name}이 경적을 울립니다!`);
}

const truck: Truck = {
  name: "포드",
  power: 100,
};

horn(truck);

const obj = {
  name: "오브젝트",
};

horn(obj);

const obj2 = {
  test: "테스트",
};

// horn(obj2);
