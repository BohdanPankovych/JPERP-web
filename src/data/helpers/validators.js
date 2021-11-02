
export const required = (value) => ((value || typeof value === 'number') ? undefined : 'フィールドを空にすることはできません!');//translate to Japan
export const notLong = (value) => (value?.length > 100 ? '(100文字まで入力可能)' : undefined);
export const notLong200 = (value) => (value?.length > 200 ? '(200文字まで入力可能)' : undefined);

