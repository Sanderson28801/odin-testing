export function capitalize(str) {
    if(str.length === 0){
        return ""
    }
    return str.slice(0,1).toUpperCase() + str.slice(1, str.legnth);
}
