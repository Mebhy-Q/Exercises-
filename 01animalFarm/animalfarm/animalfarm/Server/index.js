import express from "express";
import cors from "cors";


//server seach
const app = express();
app.use(cors());
app.use(express.json());

//make some animals
import Chance from "chance";
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {

    return{
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
});

//endpoint to read animals
app.get('', (req, res) =>{
    // filter results by query
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));
    
    res.send(results);

});

app.listen(8080, () => console.log('listening on port http://localhost:8080'));
