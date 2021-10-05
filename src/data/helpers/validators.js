
export const required = (value) => ((value || typeof value === 'number') ? undefined : 'Field can`t be empty!');//translate to Japan
console.log('required', required())
export const notLong = (value) => (value?.length > 200 ? '(200文字まで入力可能)' : undefined);
console.log('notLong', notLong())

