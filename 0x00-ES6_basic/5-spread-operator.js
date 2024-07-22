// This function takes in three parameters: array1, array2, and string.

export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
}