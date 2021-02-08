
export default function camelToKebabCase(str: string) {
    return str
        .replace(/([A-Z])/g, g => '-' + g[0])
        .toLowerCase();
}
