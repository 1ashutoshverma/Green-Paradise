import footer  from "./components/footer/footer.js"
import products,{render} from "./components/product_container/product_container.js"

window.onload=()=>render(products)
document.getElementById('footer').innerHTML = footer();
let houseplants = false, houseplant_sets = false,flowerpots=false,soil_fertilizers = false
let houseplantFilter = document.getElementById('houseplant_filter')
houseplantFilter.onchange=()=>{
    houseplants=!houseplants
    render(sortNfilter())
}
let priceRangeFilter = document.getElementById('price_range_filter')
priceRangeFilter.onchange = ()=>{
    render(sortNfilter())
}
let houseplantSetsFilter = document.getElementById('houseplant_set_filter')
houseplantSetsFilter.onchange=()=>{
    houseplant_sets=!houseplant_sets
    render(sortNfilter())   
}
let flowerpotFilter = document.getElementById('flowerpot_filter')
flowerpotFilter.onchange=()=>{
    flowerpots=!flowerpots
    render(sortNfilter())
}
let soilFertilizerFilter = document.getElementById('soil_and_fertilizers_filter')
soilFertilizerFilter.onchange=()=>{
    soil_fertilizers=!soil_fertilizers
    render(sortNfilter())
}
let sorting =document.getElementById('sorting')
sorting.onchange=()=>render(sortNfilter())
let sortNfilter = () => {
    let filtered = productFilter()
    let sortedNFiltered = productSort(filtered)
    return sortedNFiltered;
}
let productFilter = () =>{
    let res = products.filter(el=>{
        if(!houseplants && !houseplant_sets && !flowerpots && !soil_fertilizers)return el.price<=priceRangeFilter.value;
        let res = false;
        if(houseplants)res = res || el.category === "Houseplants";
        if(houseplant_sets)res = res || el.category === "Houseplant Sets"
        if(flowerpots)res = res || el.category === "Flowerpot"
        if(soil_fertilizers)res = res || el.category === "Soil" || el.category === "Fertilizer";
        return el.price<=parseInt(priceRangeFilter.value) && res;
    })
    console.log(res)
    return res;
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