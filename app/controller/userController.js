import path from 'path';

export const createUser = async (req, res) => {
    try{
        res.status(201).json({message: 'User Created Successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


export const readUser = async (req, res) => {
    try {
        res.status(201).json({message: 'User read successfully'})
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export const updateUser = async (req, res) => {
    try{
        res.status(201).json({message: 'User Updated Successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const deleteUser = async (req, res) => {
    try{
        res.status(201).json({message: 'User deleted successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const getAllUsers = async (req, res) =>{
    try {
        res.status(201).json({message: 'All users fetched successfully'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        res.status(201).json({message: 'User fetched by ID'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const loginUser = async (req, res) => {
    try {
        res.status(201).json({message: 'User login successful'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.status(201).json({message: 'User logout successful'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const changePassword = async (req, res) =>{
    try {
        res.status(201).json({message: 'Password changed successfully'})
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const updateProfile = async (req, res) => {
    try {
        res.status(201).json({message: 'User profile updated successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const makeAdmin = async (req, res) => {
    try {
        const userId = req.params.id;
        res.status(201).json({ message: 'User made admin successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).json({message: ' Admin role removed successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const searchUsers = async (req, res) => {
    try {
        res.status(200).json({message: 'User search completed successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
export const filterUsers = async (req, res) => {
    try {
        res.status(200).json({message: 'User filter completed successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const blockUser = async (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).json({message: 'User blocked successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const unblockUser = async (req, res) => {
    try {
        const id = req.params.id;
        res.status(200).json({message: 'User unblocked successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const verifyEmail = async (req, res) => {
    try {
        res.status(200).json({message: 'Email verified successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const resendVerification = async (req, res) => {
    try {
        res.status(200).json({message: 'Verification email resent'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const uploadProfilePicture = async (req, res) => {
    try {
        res.status(200).json({message: 'Profile picture uploaded successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const deleteAccount = async (req, res) => {
    try {
        res.status(200).json({message: 'Account deleted successfully'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}