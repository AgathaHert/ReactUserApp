import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';


const prisma = new PrismaClient()

const app = express()
const port = 3001;
app.use(express.json())
app.use(cors())

app.get('/usuarios', async (request, response) => {
    try {
        const users = await prisma.user.findMany();
        response.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        response.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

app.post('/usuarios', async (request, response) => {
    try {
        console.log('Received request:', request.body);
        const { name, age } = request.body;

        if (!name || !age) {
            console.log('Missing name or age in request body');
            return response.status(400).json({ error: 'Name and age are required' });
        }

        const user = await prisma.user.create({
            data: {
                name: name,
                age: parseInt(age) // Convert age to integer
            }
        });

        response.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        response.status(500).json({ error: 'An error occurred while creating the user', details: error.message });
    }
});

app.put('/usuarios/:id', async (request, response) => {
    try {
        const { name, age } = request.body;
        const id = request.params.id;

        if (!name || !age) {
            return response.status(400).json({ error: 'Name and age are required' });
        }

        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                age: parseInt(age) // Convert age to integer
            }
        });

        response.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        response.status(500).json({ error: 'An error occurred while updating the user', details: error.message });
    }
});

app.delete('/usuarios/:id', async (request, response) => {
    try {
        const id = request.params.id;

        await prisma.user.delete({
            where: {
                id: id
            }
        });

        response.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        response.status(500).json({ error: 'An error occurred while deleting the user', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// usuario : agatha , senha : JQm1WtCOPd2ddPDJ
