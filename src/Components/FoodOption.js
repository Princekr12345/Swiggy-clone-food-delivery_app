import {imageGridCards} from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){

    return(
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((FoodData) => <FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
            }
        </div>
        </>
    )
}