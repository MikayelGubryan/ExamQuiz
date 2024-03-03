const { MongoClient } = require('mongodb');
const testGenerator = require('./testGenerator');

const uri = "mongodb://localhost:27017";


const dbName = "tDB";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        const db = client.db(dbName);
        return db; // Return the database connection
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("theme-input-second");
    const button = document.getElementById("generate-button");

    inputElement.addEventListener("input", function(event) {
        event.target.value = event.target.value.replace(/\D/g, "");
        console.log(event.target.value);
    });

    button.addEventListener("click", async function() {
        const nameInput = document.getElementById("theme-input");
        const numberInput = document.getElementById("theme-input-second");
    
        const name = nameInput.value;
        const number = parseInt(numberInput.value);
    
        if(isNaN(number) || number <= 0) {
            alert("Please enter a valid number");
            return;
        }

        if(number >= 5) {
            alert("Please enter a number between 1 and 4");
            return;
        }
    
        try {
            const db = await connect(); // Connect to MongoDB
            if (testGenerator(name, number)) {
                alert("Test Generated");
            } else {
                alert("Test not generated");
            }
        } catch(error) {
            alert("Error:", error.message);
        }
    });
});
