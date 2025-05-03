const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (val)=>console.log(val))

function printMe(name){

    console.log(name);
    

}

coding.forEach((num, indexed, arr) => console.log(num,indexed,arr)
)

const myCoding = [
    {
        languageName:"javascript",
        languageFileNmae: "js",
    },
    {
        languageName:"java",
        languageFileNmae: "java",
    },
    {
        languageName:"python",
        languageFileNmae: "py",
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName,"--->",item.languageFileNmae);
    
})