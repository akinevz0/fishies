import type AnchoredSprite from "../../assets/AnchoredSprite"
import BaseCharacter from "../BaseCharacter"
import type Stats from "../Stats"

const CRAB_X_SQUARES = 2
const CRAB_Y_SQUARES = 2

class Crab extends BaseCharacter {


    constructor(sprite: AnchoredSprite, stats: Stats) {
        super(sprite, stats)
    }
}

export default Crab
