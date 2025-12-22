

export default function GroceryCard({FoodData}){

    return(
        <div className="flex-none">
        <a href={FoodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId}></img>
        </a>
        <h2 className="text-center font-bold">{FoodData?.action?.text}</h2>
        </div>
    )
}