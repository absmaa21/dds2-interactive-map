import {Boss, Hideout, Shop} from "@/pojos/data";

export function isShop(obj: any): obj is Shop {
    return obj["check-possible"] !== undefined && obj['discounts']
}

export function isHideout(obj: any): obj is Hideout {
    return obj['running-water'] !== undefined && obj['phoneline'] !== undefined
}

export function isBoss(obj: any): obj is Boss {
    return obj['demands']
}
