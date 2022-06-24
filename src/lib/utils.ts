export function defaultIfNull<T, V>(nullable: T | null, d: V): T | V {
    debugger
    return nullable == null? d : nullable
}