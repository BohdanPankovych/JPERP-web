export const valsWithPrefix = prefix => obj => Object.entries(obj).reduce((prev, [curK, curV]) => ({
    ...prev,
    [curK]: prefix + curV
}), {});