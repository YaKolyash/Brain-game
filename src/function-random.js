export const random = (min, max) => {
    const randomCount = Math.floor(Math.random() * (max - min + 1) + min);
    return randomCount;
}