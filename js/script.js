// task1
let arr = ['Donik', 'Sulton', 'Timur', 'Said', 'Roma']
let namedelete = prompt('Which user do want to delete?')
if(arr.includes(namedelete) === true){
    let outPut = arr.splice(arr.indexOf(namedelete), 1)  
    alert(outPut)  
    alert(arr)  
 }else{
     alert("Not found!")
 }

// task2 
let namesObject = {
    name1: "Donik",
    name2: "Sultanbek",
    name3: "Roma",
    name4: "Oddil",
    name5: "Saidbek"
}
let names2 = ['Bob', 'Jane', "Leo", 'Alex', 'Dick','Roma', 'Antony',"Leo"]
let object = Object.values(namesObject) 
namesArray = names2.concat(object) 
console.log(names2);
