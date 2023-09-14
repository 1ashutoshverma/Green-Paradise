import footer  from "./components/footer/footer.js"
import products,{render} from "./components/product_container/product_container.js"

window.onload=()=>render(products)
document.getElementById('footer').innerHTML = footer();
let houseplants = false, houseplant_sets = false,flowerpots=false,soil_fertilizers = false
let houseplantFilter = document.getElementById('houseplant_filter')
houseplantFilter.onchange=()=>{
    houseplants=!houseplants
    filter()
}
let priceRangeFilter = document.getElementById('price_range_filter')
priceRangeFilter.onchange = ()=>{
    let val = event.target.value;
    render(products.filter(el=>parseInt(el.price)<=val))
}
let filter = () => {
    render(products.filter(el=>{
        if(!houseplants && !houseplant_sets && !flowerpots && !soil_fertilizers)return true;
        let res = false;
        if(houseplants)res=res||el.category==="Houseplants";
        if(houseplant_sets)res=res||el.category==="Houseplant Sets"
        if(flowerpots)res=res||el.category==="Flowerpot"
        if(soil_fertilizers)res= res || el.category==="Soil" || el.category==="Fertilizer";
        return res;
    }))
}
let houseplantSetsFilter = document.getElementById('houseplant_set_filter')
houseplantSetsFilter.onchange=()=>{
 houseplant_sets=!houseplant_sets
    filter()   
}
let flowerpotFilter = document.getElementById('flowerpot_filter')
flowerpotFilter.onchange=()=>{
    flowerpots=!flowerpots
    filter()
}
let soilFertilizerFilter = document.getElementById('soil_and_fertilizers_filter')
soilFertilizerFilter.onchange=()=>{
    soil_fertilizers=!soil_fertilizers
    filter()
}
let sorting =document.getElementById('sorting')
sorting.onchange=()=>{
    let val = event.target.value
    let temp = [...products]
    if(val==="atoz")render(temp.sort((a,b)=>a.name.localeCompare(b.name)))
    else if(val==="ztoa")render(temp.sort((a,b)=> -a.name.localeCompare(b.name)))
    else if(val==="lowtohigh")render(temp.sort((a,b)=> a.price-b.price))
    else if(val==="hightolow")render(temp.sort((a,b)=> b.price-a.price))
    else render(products)
}