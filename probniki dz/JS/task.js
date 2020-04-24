//Нужно написать функцию, принимающую строку
// в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
const countValues = function (string) {
  let array = ["a", "e", "i", "o", "u"];
  let count = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  for (let arr of array) {
    for (let str of string) {
      if (str.toLowerCase() === arr) {
        count[arr] += 1;
      }
    }
  }
  return console.log(count);
};
countValues("Hello");
countValues("Bootcamp");





// Многоквартирный дом характеризуется следующими тремя показателями: этажность(1 - 25),
// число подъездов(1 - 10), количество квартир на лестничной площадке(1 - 20).
// Скрипт запрашивает эти показатели и номер квартиры.
// Выводится номер подъезда, в котором находится указанная квартира.
const home = {
    floor: 9,
    porch: 4,
    flatInFloor: 4,
  };
  const getPorch = function (flatNumber) {
    const { floor, porch, flatInFloor } = home;
    const totalFlat = floor * porch * flatInFloor;
    
    if (flatNumber > totalFlat) {
      console.log("Такой квартиры нет");
    } else {
      console.log(Math.ceil(flatNumber / (floor * porch)));
    }
  };
  getPorch(100)





// Есть объект hotel. У него есть основные свойства.
// Необходимо написать методы для добавления, удаления и редактирования выбранных свойств. 
// тестирование методов производить при помощи prompt
// (rooms, guests, ...)
  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
    addProp(key, value) {
      this[key] = value;
      console.log(this);
    },
    delProp(key) {
      delete this[key];
      console.log(this);
    },
    editProp(key, value) {
      this[key] = value;
      console.log(this);
    }
};
hotel.addProp('rooms', 25);
hotel.delProp('stars');
hotel.editProp('capacity', 96);





// Создайте методы для:
//     логирования данных пользователей. 
//     изменеия данных пользователей.
//     добавления новых свойств пользователей.
//     Методы записывать в отдельный объект methods.
// const alex = {
    //     id: Date.now(),
    //     name: "Alex",
    //     age: 25,
//     details: {
    //         course: "BC#20",
    //         studentId: '36762347'
    //     }
    // }
    // const nick = {
        //     id: Date.now(),
        //     name: "Alex",
//     age: 25,
//     details: {
    //         course: "BC#20",
    //         studentId: '36762347'
    //     }
    // }
// const methods = {
    // }
    const alex = {
        id: Date.now(),
        name: "Alex",
        city: 'Odessa',
        age: 25,
        details: {
            course: "BC#20",
            studentId: '36762347'
        }
    }
    const nick = {
        id: Date.now(),
        name: "Alex",
        age: 25,
        details: {
            course: "BC#20",
            studentId: '36762347'
        }
    }
    const methods = {
        logUser(user) {
            const keys = Object.keys(user);
            console.log(keys);
            for (const key of keys) {
                // console.log(key);
                // console.log(typeof key);
                if (typeof user[key] === 'object') {
                    for (const keysOfUserKey in user[key]) {
                        console.log(`${keysOfUserKey}: ${user[key][keysOfUserKey]}`);
                    }
                } else {
                    console.log(`${key}: ${user[key]}`);
                }
            }
        },
        changeDetails(user, key, value) {
            const keys = Object.keys(user);
            if (key in user) {
                user[key] = value;
            } else {
                for (const keysOfUserKey of keys) {
                    if (typeof user[keysOfUserKey] === 'object') {
                        for (const k in user[keysOfUserKey]) {
                            console.log(k);
                            if (k === key) {
                                user[keysOfUserKey][k] = value;
                                console.log(user);
                            }
                        }
                    }
                }
            }
        },
        addDetails(user, key, value) {
            user[key] = value;
            console.log(user);
        }
    }
    // methods.logUser(alex);
    methods.addDetails(alex, 'city', 'Kiev')