// account.tsx
export const validAccounts = [
    { username: "ausbilder", password: "ortem4202!" },
    { username: "azubis", password: "ortem4202!" },
    { username: "saschiffer", password: "2403121987" },
    { username: "testuser", password: "ortem4202!" },
    // Füge hier weitere gültige Benutzerkonten hinzu
];

export const isValidAccount = (username: string, password: string): boolean => {
    return validAccounts.some(account => account.username === username && account.password === password);
};
