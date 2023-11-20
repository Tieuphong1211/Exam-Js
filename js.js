// Xử lý chuỗi
// Bài tap 1
console.log('XU LY CHUOI');
console.log('Bai tap 1');
let strings = 'xin chao'
let result = change(strings)
function change (strings) {
    return strings.replace(/\b\w/g, function(match){
        return match.toUpperCase();
    })
}
console.log(result);

// Xử lý mảng
// Bai tap 1
console.log('XU LY MANG');
console.log("bai tap 1");
let numbs= [9,8,7,2,6,9,4,3,8,]

function findnumb (numbs) {
    if (numbs.length === 0) {
        console.log("Mang ko co gia tri");
    }
    let max = numbs[0]
    for (i=1;i<numbs.length;i++){
        if (numbs[i] > max){
            max = numbs[i]
        } 
    }
    let samemax = numbs.filter(function(item){
        return item == max
    })
    // console.log(samemax);


    let newnumbs = numbs.filter(function(item){
        return item !== max
    })
    // console.log(newnumbs);
    
    
    let max_2 = newnumbs[0]
    for (i=1;i<newnumbs.length;i++){
        if (newnumbs[i] > max_2){
            max_2 = newnumbs[i]
        }
    }

    samemax_2 = newnumbs.filter(function(item){
        return item == max_2
    })
    // console.log(samemax_2);

    lastmax_arr = samemax.concat(samemax_2)
    // console.log(lastmax_arr);


    let lastmax = lastmax_arr[0]
    for(i=1;i<lastmax.length;i++){
        if (lastmax < lastmax_arr[i]){
            lastmax = lastmax_arr[i] 
        }
    }
    // console.log(lastmax);

    let final = lastmax_arr.filter(function(item){
        return item !== lastmax
    })
    console.log("Số lớn thứ nhì cần tìm là: " + final[0]);
}
findnumb(numbs)

// Bai tap 2
console.log("bai tap 2");
var abc = ['aba','as','sdaqf','aaa','add','asdv','asdfdd','as']
function check(abc){
    let longest = abc[0]
    for (i=0;i<abc.length;i++) {
        if (abc[i].length >= longest.length){
            longest = abc[i]
        }
    }
    console.log('chuỗi có độ dài lớn nhất là: ' + longest);
}
check(abc)

// Bai tap 3 
console.log("bai tap 3");
const random = [1,3,5,7,9,11,13];
function takerandom (random) {
    let resultrandom
    resultrandom = random[Math.floor(Math.random() * random.length)]
    console.log('Phần tử ngẫu nhiên trong mảng là:'+resultrandom);
}
takerandom(random)

// Xử lý object 
// Bai tap 1
console.log('XU LY OBJECT');
console.log('Bai tap 1');
const students = [
    { name: 'Roger', age: 20 },
    { name: 'john', age: 25 },
    { name: 'Emma', age: 22 },
    { name: 'liam', age: 27 },
    { name: 'sophia', age: 24 },
    { name: 'Noah', age: 21 },
    { name: 'Slivia', age: 28 },
    { name: 'William', age: 23 },
    { name: 'sava', age: 26 },
    { name: 'James', age: 29 }
];

const ages = students.map(function(person){
    return person.age
})
console.log(ages);
function SumAge (ages){
    let sumage = 0
    for (i=0;i<ages.length;i++){
        sumage += ages[i]
    }
    return sumage
}
let sumage = SumAge (ages)
let avrage = sumage/ages.length 
console.log('Số tuổi trung bình của sinh viên là: '+ avrage);

const nthage = students.sort(function(a,b){
    return a.age - b.age
});
console.log(nthage);

const nthname = students.sort(function(a,b){
    return a.name.localeCompare(b.name)
})
console.log(nthname);   

function find_s_students(students){
    return students.filter(function(names){
        return names.name.toLowerCase().startsWith('s')
    })
}
const find_s = find_s_students(students)
console.log(find_s);


// Bai tap 2 
let users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
var allages = users.map(function(person){
    return person.age
})
console.log(allages);
let totalages= 0 
function sumage_2(){
    for(i=0;i<allages.length;i++){
        totalages += allages[i]
    }
}
sumage_2()
let avrage_2 = totalages/allages.length
users.push( avrage_2)    
console.log(users);

function cpages (allages){
    let max_2 = allages[0];
    for (i=0;i<allages.length;i++){
        if (max_2<allages[i]){
            max_2 = allages[i]
        }
    }
    return max_2
}
let max_age = cpages(allages)
users.push(max_age)
console.log(users);

function filteruser (users){
    return users.filter(function(user){
        return user.age > 25 && user.isStatus === true
    })
}
let filterUser = filteruser(users)
console.log(filterUser);

function arage (users){
    return users.sort(function(a,b){
        return a.age - b.age
    })
}
let arrangerage = arage(users)
console.log(arrangerage);


// Bai tap 3
let str = ["one", "two", "three", "one", "one", "three"]
function count (str) {
    let ownercount = []
    for (i=0;i<str.length;i++){
        let curent = str[i]
        if(ownercount[curent]){
            ownercount[curent]++
        }else{
            ownercount[curent]=1
        }
    }
    return ownercount
}
let result_2 = count(str)
console.log(result_2);