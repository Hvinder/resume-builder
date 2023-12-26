export const isEmail = (email: string) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);

export const isPhone = (number: string) => /^[\d+]+$/.test(number);
