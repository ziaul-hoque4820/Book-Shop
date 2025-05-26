export function getImageUrl(name) {
    return new URL(`../assets/book-img/${name}`,
    import.meta.url).href
}