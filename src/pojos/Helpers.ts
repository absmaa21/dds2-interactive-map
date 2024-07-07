import {Boss, Equipment, Furniture, Hideout, IItem, Shop} from "@/pojos/data";

export function isShop(obj: any): obj is Shop {
    return obj["check-possible"] !== undefined && obj['discounts'] !== undefined
}

export function isHideout(obj: any): obj is Hideout {
    return obj['running-water'] !== undefined && obj['phoneline'] !== undefined
}

export function isBoss(obj: any): obj is Boss {
    return obj['demands'] !== undefined
}

export function isFurniture(obj: any): obj is Furniture {
    if (obj["tier"] !== undefined) return false
    return obj["visibility"] !== undefined || obj["substance-storage"] !== undefined || obj['security'] !== undefined
}

export function isEquipment(obj: any): obj is Equipment {
    return obj["tier"] !== undefined
}

export function getAvailableLevel(item: IItem) {
    let lvl = 0;
    for (let i = 0; i < item.quantity.length; i++) {
        lvl = i
        if (item.quantity[i] > 0) return lvl
    }
    return lvl;
}
