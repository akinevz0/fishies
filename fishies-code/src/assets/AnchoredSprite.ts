import { Sprite } from "pixi.js"

/**
 * Here we declare a Sprite that can be attached to any 0.1x0.1m object
 * in the game world. A FullSprite is a 2d 1x1m object.
 */
class AnchoredSprite extends Sprite {
    anchor: SpriteAnchor

    constructor(anchor: SpriteAnchor = { x: 0.5, y: 0.8 }) {
        this.anchor = anchor
    }
}

export interface SpriteAnchor {
    x: number
    y: number
}

export default AnchoredSprite