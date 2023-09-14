import footer  from "./components/footer/footer.js"
import products,{render} from "./components/product_container/product_container.js"

window.onload = () => {
    start = render(products,0)
}
window.onscroll = ()=>{
    if(Math.ceil(window.scrollY)+900>=document.querySelector('body').clientHeight)start = render(data,start,"scroll")
}
document.getElementById('footer').innerHTML = footer();
let houseplants = false, houseplant_sets = false,flowerpots=false,soil_fertilizers = false
let houseplantFilter = document.getElementById('houseplant_filter')
let data = products,start = 0;
houseplantFilter.onchange=()=>{
    houseplants=!houseplants;
    data = sortNfilter();
    start =render(data,0);
}

let priceRangeFilter = document.getElementById('price_range_filter')
priceRangeFilter.onchange = ()=>{
    data = sortNfilter();
    start = render(data,0)
}
let houseplantSetsFilter = document.getElementById('houseplant_set_filter')
houseplantSetsFilter.onchange=()=>{
    houseplant_sets=!houseplant_sets
    data = sortNfilter();
    start = render(data,0)

}
let flowerpotFilter = document.getElementById('flowerpot_filter')
flowerpotFilter.onchange=()=>{
    flowerpots=!flowerpots
    data = sortNfilter();
    start = render(data,0)

}
let soilFertilizerFilter = document.getElementById('soil_and_fertilizers_filter')
soilFertilizerFilter.onchange=()=>{
    soil_fertilizers=!soil_fertilizers
    data = sortNfilter();
    start = render(data,0)

}
let sorting = document.getElementById('sorting')
sorting.onchange = ()=>{
    data = sortNfilter();
    start = render(data,0)
}
document.getElementById('reset_filters').onclick=()=>{
    if(houseplants)houseplantFilter.click()
    if(houseplant_sets)houseplantSetsFilter.click()
    if(flowerpots)flowerpotFilter.click()
    if(soil_fertilizers)soilFertilizerFilter.click()
    priceRangeFilter.value=2500
    data = sortNfilter();
    start = render(products,0)
}
let sortNfilter = () => {
    let filtered = productFilter()
    let sortedNFiltered = productSort(filtered)
    return sortedNFiltered;
}
let productFilter = () =>{
    let priceRange = parseInt(priceRangeFilter.value);
    data = products.filter(el=>{
        if(!houseplants && !houseplant_sets && !flowerpots && !soil_fertilizers)return el.price <= priceRange;
        let res = false;
        if(houseplants && el.category === "Houseplants")
            res = true;
        if(houseplant_sets && el.category === "Houseplant Sets")
            res = true;
        if(flowerpots && el.category === "Flowerpot")
            res = true
        if(soil_fertilizers && (el.category === "Soil" || el.category === "Fertilizer"))
            res = true;
        return el.price <= priceRange && res;
    })
    return data;
}
let productSort=(data)=>{
    let val = sorting.value
    let temp = [...data]
    if(val==="atoz")return temp.sort((a,b)=> a.name.localeCompare(b.name))
    else if(val==="ztoa")return temp.sort((a,b)=> -a.name.localeCompare(b.name))
    else if(val==="lowtohigh")return temp.sort((a,b)=> a.price-b.price)
    else if(val==="hightolow")return temp.sort((a,b)=> b.price-a.price)
    else return temp
}