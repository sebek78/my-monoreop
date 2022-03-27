type Tokens = {
    access_token: string;
    athlete: object; // TODO type
};

type ApiError = {
    code: string;
    field: string;
    resource: string;
};

type Fault = {
    message: string;
    errors: ApiError[];
};

export { Fault, Tokens };
