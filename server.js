import express from 'express';
import testRoutes from './routes/testRoute';
const app = express();
app.use('/', testRoutes);
app.listen(8000, () => {
    try {
        console.log("🌍 Server Is Running on 👉 http://localhost:8000");
        console.log("🌍 Test Server on 👉 http://localhost:8000/version");
    }
    catch (error) {
        console.log(`🔴 INTERNAL ERROR :: ${error}`);
    }
});
