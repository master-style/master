
export default function kebabToCamelCase(str: string) {
    return str
        .split('-')
        .map((eachStr, i) =>
            (i === 0 ? eachStr[0] : eachStr[0].toUpperCase()) + eachStr.slice(1)
        )
        .join('');
}
