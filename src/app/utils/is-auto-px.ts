
export default function isAutoPx(propName: string) {
    return /^[a-z]/.test(propName) &&
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/.test(propName[0].toUpperCase() + propName.slice(1));
}
