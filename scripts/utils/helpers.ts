export const transToPX = (size: number | string) => {
    return size.toString().indexOf('px') === -1 ? `${size}px` : size
}