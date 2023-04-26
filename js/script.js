// // CLASSWORK
// let arr3 = [1, 'hello', true, 2, 3, 'world', null, 'error', 22];

// let iter = 0
// let n = 0
// for(let item of arr3) {
//     console.log(item);
//     iter++

//     if(typeof(item) === 'number') {
//         n+=1
//     }
// }
// if(n<5){
//     console.log('good');
// } else{
//     console.log('bad');
// }
// console.log(iter);
// console.log(n);





// H/W  
// Описание задачи 

// Найти количество людей одного типа из массива и сохранить их в массив категории 
// В массиве категорий специально допущены ошибки (исходный массив менять нельзя)


let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]


for(let item of arr) {
    let faculity = item.info.faculity.trim().toLocaleLowerCase()
    for(let category2 of categories) {
        let course = category2.course.trim().toLocaleLowerCase()

        if (faculity === course) {
            category2.count++
        }
    }

    console.log(categories);
}


