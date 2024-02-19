interface User {
    username: string;
    password: string;
}

export const users: Record<string, User> = {
    standardUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    lockedOutUser: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    }
};
