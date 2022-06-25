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
let sublink1 = document.getElementById("sublink1")
let sublink2 = document.getElementById("sublink2")
let sublink3 = document.getElementById("sublink3")
let sublink4 = document.getElementById("sublink4")
let drop1 = document.getElementById("drop1")
let drop2 = document.getElementById("drop2")
let drop3 = document.getElementById("drop3")
let drop4 = document.getElementById("drop4")
let drop5 = document.getElementById("drop5")
let subdrop1 = document.getElementById("subdrop1")
let subdrop2 = document.getElementById("subdrop2")
let subdrop3 = document.getElementById("subdrop3")
let subdrop4 = document.getElementById("subdrop4")
let remove1 = document.getElementById("remove1")
let remove2 = document.getElementById("remove2")
let remove3 = document.getElementById("remove3")
let remove4 = document.getElementById("remove4")
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

remove1.addEventListener("mouseover", () => {
    subdrop1.classList.remove("block")
})

remove2.addEventListener("mouseover", () => {
    subdrop2.classList.remove("block")
})

remove3.addEventListener("mouseover", () => {
    subdrop3.classList.remove("block")
})

remove4.addEventListener("mouseover", () => {
    subdrop4.classList.remove("block")
})

link2.addEventListener ("mouseover", function(){
    drop1.classList.add("block")
})

link2.addEventListener ("mouseleave", function(){
    drop1.classList.remove("block")
    subdrop1.classList.remove("block")
    subdrop2.classList.remove("block")
})

drop1.addEventListener("mouseleave", () => {
    drop1.classList.remove("block")
})

link3.addEventListener ("mouseover", function(){
    drop2.classList.add("block")
})

link3.addEventListener ("mouseleave", function(){
    drop2.classList.remove("block")
})

drop2.addEventListener("mouseleave", () => {
    drop2.classList.remove("block")
})

link4.addEventListener ("mouseover", function(){
    drop3.classList.add("block")
})

link4.addEventListener ("mouseleave", function(){
    drop3.classList.remove("block")
})

drop3.addEventListener("mouseleave", () => {
    drop3.classList.remove("block")
})

link5.addEventListener ("mouseover", function(){
    drop4.classList.add("block")
})

link5.addEventListener ("mouseleave", function(){
    drop4.classList.remove("block")
})

drop4.addEventListener("mouseleave", () => {
    drop4.classList.remove("block")
})

link6.addEventListener ("mouseover", function(){
    drop5.classList.add("block")
})

link6.addEventListener ("mouseleave", function(){
    drop5.classList.remove("block")
    subdrop3.classList.remove("block")
    subdrop4.classList.remove("block")
})

drop5.addEventListener("mouseleave", () => {
    drop5.classList.remove("block")
})

link7.addEventListener ("mouseover", function(){
    drop6.classList.add("block")
})

link7.addEventListener ("mouseleave", function(){
    drop6.classList.remove("block")
})

drop6.addEventListener("mouseleave", () => {
    drop6.classList.remove("block")
})

sublink1.addEventListener ("mouseover", function(){
    subdrop1.classList.add("block")
    subdrop2.classList.remove("block")
})

// sublink1.addEventListener ("mouseleave", function(){
//     subdrop1.classList.remove("block")
// })

subdrop1.addEventListener("mouseleave", () => {
    subdrop1.classList.remove("block")
})

sublink2.addEventListener ("mouseover", function(){
    subdrop2.classList.add("block")
    subdrop1.classList.remove("block")
})

sublink3.addEventListener ("mouseover", function(){
    subdrop3.classList.add("block")
    subdrop4.classList.remove("block")
})

sublink4.addEventListener ("mouseover", function(){
    subdrop4.classList.add("block")
    subdrop3.classList.remove("block")
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