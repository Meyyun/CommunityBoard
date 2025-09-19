import CardList from "./consts/CardList";
import ProspectPark from "./consts/Park_Pic/Prospectpark.webp";
import CentralPark from "./consts/Park_Pic/CentralPark.webp";
import BrooklynBridge from "./consts/Park_Pic/brooklynbridgepark.webp";
import TheHighLine from "./consts/Park_Pic/TheHighLine.webp";
import BryantPark from "./consts/Park_Pic/BryantPark.webp";
import WashingtonSquare from "./consts/Park_Pic/WastingtonSqarePark.webp";
import FlushingMeadows from "./consts/Park_Pic/flushingMedowsCoronaPark.webp";
import BatteryPark from "./consts/Park_Pic/batteryPark.webp";
import DominoPark from "./consts/Park_Pic/DominoPark.webp";
import VanCortlandt from "./consts/Park_Pic/VanCortlantPark.webp";
import LittleIsland from "./consts/Park_Pic/Littleisland.webp";
import GovernorPark from "./consts/Park_Pic/GovernorPark.webp";
import RiverSide from "./consts/Park_Pic/RiverSide.webp";
import UnionSquarePark from "./consts/Park_Pic/UnionSquarepark.webp";
import HudsonRiverPark from "./consts/Park_Pic/HudsonRiverPark.webp";
const Card = ()=>{
    const imageMap = {
    "Prospectpark.webp": ProspectPark,
    "CentralPark.webp": CentralPark,
    "brooklynbridgepark.webp": BrooklynBridge,
    "TheHighLine.webp": TheHighLine,
    "BryantPark.webp": BryantPark,
    "WashingtonSquarePark.webp": WashingtonSquare,
    "flushingMedowsCoronaPark.webp": FlushingMeadows,
    "batteryPark.webp": BatteryPark,
    "DominoPark.webp": DominoPark,
    "VanCortlantPark.webp": VanCortlandt,
    "Littleisland.webp": LittleIsland,
    "GovernorPark.webp": GovernorPark,
    "RiverSide.webp": RiverSide,
    "UnionSquarepark.webp": UnionSquarePark,
    "HudsonRiverPark.webp": HudsonRiverPark
};
    return (
        <div className="Card-container">
            {CardList.map((text,index) => (
                <div className="Card-item" key={index}>
                    <img className="Card-image" src={imageMap[text.Pic]} alt={text.Name} />
                    <h3>{text.Name}</h3>
                    <p>Borough: {text.Borough}</p>
                    <button className="Card-button">Click to Learn More Information</button>
                </div>
            ))}
        </div>
    )
}
export default Card;