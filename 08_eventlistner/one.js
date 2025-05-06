// document.querySelector("#owl").addEventListener('click', function(e){
//     console.log("clicked");
//     e.stopPropagation()
//     e.preventDefault()
    
    
// },false)

document.querySelector('#owl').addEventListener('click',function(e){
    const  val = e.target.tagName
    console.log(val);
    if (val ==="BUTTON"){
        let removeit = e.target.parentNode;
        removeit.remove()
    }
    
})


//fqalse is used for object propogation

//2 type - flase means bubling means buttom to top
// true means capturing top to bottom

//type , timestamp , defaultPrevented
//target, toelement, srcElement, currentTarget

//keys- alt, shift, cntrl   