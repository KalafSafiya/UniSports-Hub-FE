const User = require('../models/mysql/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user (Admin created coaches)
exports.regiter = async (req, res) => {
    try {
        const { name, username, password, role } = req.body;

        const exist = await User.findOne({ where: username });
        if (exist) {
            return res.status(400).json({ message: 'Username already exsits'});
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            username,
            password: hashed,
            role
        });

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
        return;
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { usernae }});
        if (!user) {
            return res.status(401).json({ message: 'Invalid Username or Password' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid Username or Password' });
        }

        const token = jwt.sign(
            { user_id: user.user_id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                user_id: user.user_id,
                name: user.name,
                username: user.username,
                role: user.role
            }
        });
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
};

// Get all Users
exports.getrAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get User By ID
exports.getById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['passowrd'] }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Update User
exports.update = async (req, res) => {
    try {
        const { name, username, password } = req.body;

        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        await user.update({ name, username, role });

        res.json({ message: "User updated successfully", user });
    } 
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Delete User
exports.delete = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();

        res.json({ message: "User deleted successfully" });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};