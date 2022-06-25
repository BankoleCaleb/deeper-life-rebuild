let links = document.querySelector(".links")
let open = document.getElementById("open")
let close = document.getElementById("close")
let input = document.getElementById("input")
let smallScreenMenu = document.querySelector(".small-screen")
let closeInput = document.getElementById("close-input")
let search = document.getElementById("search")
let link1 = document.getElementById("link-1")
let link2 = document.getElementById("link-2")
let link3 = document.getElementById("link-3")
let link4 = document.getElementById("link-4")
let link5 = document.getElementById("link-5")
let link6 = document.getElementById("link-6")
let link7 = document.getElementById("link-7")
let minus1 = document.getElementById("minus1")
let plus1 = document.getElementById("plus1")
let minus2 = document.getElementById("minus2")
let plus2 = document.getElementById("plus2")
let minus3 = document.getElementById("minus3")
let plus3 = document.getElementById("plus3")
let minus4 = document.getElementById("minus4")
let plus4 = document.getElementById("plus4")
let minus5 = document.getElementById("minus5")
let plus5 = document.getElementById("plus5")
let minus6 = document.getElementById("minus6")
let plus6 = document.getElementById("plus6")
let subMinus1 = document.getElementById("sub-minus1")
let subPlus1 = document.getElementById("sub-plus1")
let subMinus2 = document.getElementById("sub-minus2")
let subPlus2 = document.getElementById("sub-plus2")
let subMinus3 = document.getElementById("sub-minus3")
let subPlus3 = document.getElementById("sub-plus3")
let subMinus4 = document.getElementById("sub-minus4")
let subPlus4 = document.getElementById("sub-plus4")

let list1 = document.getElementById("list1")
let list2 = document.getElementById("list2")
let list3 = document.getElementById("list3")
let list4 = document.getElementById("list4")
let list5 = document.getElementById("list5")
let list6 = document.getElementById("list6")
let subList1 = document.getElementById("sub-list1")
let subList2 = document.getElementById("sub-list2")
let subList3 = document.getElementById("sub-list3")
let subList4 = document.getElementById("sub-list4")

console.log(links)
// console.log(close)
// console.log(input)
// console.log(closeInput)
// console.log(search)
// console.log(link1)
// console.log(link2)
// console.log(link3)
// console.log(link4)
// console.log(link5)
// console.log(link6)
// console.log(link7)

link1.addEventListener ("mouseover", function(){
    console.log("hover");
})

open.addEventListener("click", () => {
    open.classList.add("none");
    close.classList.add("inline");
    smallScreenMenu.classList.remove("none");
})

close.addEventListener("click", () => {
    close.classList.remove("inline");
    open.classList.remove("none")
    smallScreenMenu.classList.add("none")
    
})

search.addEventListener("click", () => {
    input.classList.add("inline");
    closeInput.classList.add("inline");
    links.style.display = "none"
})

closeInput.addEventListener("click", () => {
    closeInput.classList.remove("inline");
    input.classList.remove("inline");
    links.style.display = "flex"
})

plus1.addEventListener("click", () => {
    plus1.classList.add("none");
    minus1.classList.add("inline");
    list1.classList.add("block");
})

minus1.addEventListener("click", () => {
    plus1.classList.remove("none");
    minus1.classList.remove("inline");
    list1.classList.remove("block");
})

plus2.addEventListener("click", () => {
    plus2.classList.add("none");
    minus2.classList.add("inline");
    list2.classList.add("block");
})

minus2.addEventListener("click", () => {
    plus2.classList.remove("none");
    minus2.classList.remove("inline");
    list2.classList.remove("block");
})

plus3.addEventListener("click", () => {
    plus3.classList.add("none");
    minus3.classList.add("inline");
    list3.classList.add("block");
})

minus3.addEventListener("click", () => {
    plus3.classList.remove("none");
    minus3.classList.remove("inline");
    list3.classList.remove("block");
})

plus4.addEventListener("click", () => {
    plus4.classList.add("none");
    minus4.classList.add("inline");
    list4.classList.add("block");
})

minus4.addEventListener("click", () => {
    plus4.classList.remove("none");
    minus4.classList.remove("inline");
    list4.classList.remove("block");
})

plus5.addEventListener("click", () => {
    plus5.classList.add("none");
    minus5.classList.add("inline");
    list5.classList.add("block");
})

minus5.addEventListener("click", () => {
    plus5.classList.remove("none");
    minus5.classList.remove("inline");
    list5.classList.remove("block");
})

plus6.addEventListener("click", () => {
    plus6.classList.add("none");
    minus6.classList.add("inline");
    list6.classList.add("block");
})

minus6.addEventListener("click", () => {
    plus6.classList.remove("none");
    minus6.classList.remove("inline");
    list6.classList.remove("block");
})

subPlus1.addEventListener("click", () => {
    subPlus1.classList.add("none");
    subMinus1.classList.add("inline");
    subList1.classList.add("block");
})

subMinus1.addEventListener("click", () => {
    subPlus1.classList.remove("none");
    subMinus1.classList.remove("inline");
    subList1.classList.remove("block");
})

subPlus2.addEventListener("click", () => {
    subPlus2.classList.add("none");
    subMinus2.classList.add("inline");
    subList2.classList.add("block");
})

subMinus2.addEventListener("click", () => {
    subPlus2.classList.remove("none");
    subMinus2.classList.remove("inline");
    subList2.classList.remove("block");
})

subPlus3.addEventListener("click", () => {
    subPlus3.classList.add("none");
    subMinus3.classList.add("inline");
    subList3.classList.add("block");
})

subMinus3.addEventListener("click", () => {
    subPlus3.classList.remove("none");
    subMinus3.classList.remove("inline");
    subList3.classList.remove("block");
})

subPlus4.addEventListener("click", () => {
    subPlus4.classList.add("none");
    subMinus4.classList.add("inline");
    subList4.classList.add("block");
})

subMinus4.addEventListener("click", () => {
    subPlus4.classList.remove("none");
    subMinus4.classList.remove("inline");
    subList4.classList.remove("block");
})