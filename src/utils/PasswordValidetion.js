export const Password_validate = (password) => {
    let re = {
        capital: /(?=.*[A-Z])/,
        length: /(?=.{7,40}$)/,
        specialChar: /[ -\/:-@\[-\`{-~]/,
        digit: /(?=.*[0-9])/,
    };
    return (
        re.capital.test(password) &&
        re.length.test(password) &&
        re.specialChar.test(password) &&
        re.digit.test(password)
    );
};