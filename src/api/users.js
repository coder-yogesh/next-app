import api from "./axios"

export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        console.log("Fetched users:", response.data);
        return response.data;
    } catch(error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export const createUser = async (user) => {
    try {
        const response = await api.post("/users", user);
        console.log("Created user:", response.data);
        return response.data;
    } catch(error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export const loginUser = async (credentials) => {
    try {
        const response = await api.post("/login", credentials);
        console.log("User logged in:", response.data);
        return response.data;
    } catch(error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};


export const signUpUser = async (user) => {
    try {
        const response = await api.post("/signUp", user);
        console.log("User signed up:", response.data);
        return response.data;
    } catch(error) {
        console.error("Error signing up user:", error);
        throw error;
    }
}