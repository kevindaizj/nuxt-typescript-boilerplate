export function find<T>(arr: T[], predicate: (item: T) => boolean): T {
    if (!arr || !arr.length)
       return null;
    
    if (arr.find) 
       return arr.find(predicate);
 
    for (const item of arr) {
        if (predicate(item))
            return item;
    }
 
    return null;
}


export function toMap<T>(arr: T[], keyGetter: (item: T) => string): { [key: string]: T} {
    const map: { [key: string]: T} = {};
    if (!arr || !arr.length)
       return map;

    for(const item of arr) {
        const key = keyGetter(item);
        map[key] = item;
    }

    return map;
}