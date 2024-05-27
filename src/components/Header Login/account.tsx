// account.tsx
export const validAccounts = [
    { username: "ausbilder", password: "12345678" },
    { username: "azubi", password: "azubi" },
    { username: "saschiffer", password: "2403121987" },
    // Füge hier weitere gültige Benutzerkonten hinzu
];

export const isValidAccount = (username: string, password: string): boolean => {
    return validAccounts.some(account => account.username === username && account.password === password);
};
