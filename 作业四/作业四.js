const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const { name, age,home,year } = per;  

console.log(name)  // MING
console.log(h1,h2,h3)  // play run sing
console.log(home)  // HENAN，这里的HOME就是大写哈
console.log(year)  // 2022

