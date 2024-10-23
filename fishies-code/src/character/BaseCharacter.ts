import type { Sprite } from "pixi.js";
import type Stats from "./Stats";

abstract class BaseCharacter {
    sprite: Sprite;
    stats: Stats;

    constructor(sprite: Sprite, stats: Stats) {
        this.sprite = sprite
        this.stats = stats
    }
}

export default BaseCharacter