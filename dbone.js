// Requiring mongodb
const { MongoClient } = require("mongodb"); // Corrected the require statement

// MongoDB connection URL and client initialization
const url = "mongodb+srv://mk8701952:muxoWpoYkeCoaTR7@mukeshverma.i9muq.mongodb.net/?retryWrites=true&w=majority&appName=MukeshVerma";
const client = new MongoClient(url);
const dbName = "user2";

async function main() {
    try {
        // Connect to the database
        await client.connect();
        console.log("Database connected successfully");

        // Access the database and collections
        const db = client.db(dbName);
        const userCollection = db.collection("user");
        const ordersCollection = db.collection("order");

        // Inserting data in users and orders
        console.log("Inserting data into users and orders collection");

        await userCollection.insertMany([
            { _id: 1, name: "parse", age: 30 },
            { _id: 2, name: "aaryan", age: 35 }, // Fixed syntax issue with `name`
        ]);

        await ordersCollection.insertMany([
            { _id: 1, user_id: 1, product_id: 1, quantity: 2 },
            { _id: 2, user_id: 2, product_id: 2, quantity: 3 },
        ]);

        console.log("Data inserted successfully");

        // // Finding all users
        // const allUsers = await userCollection.find({}).toArray();
        // console.log("All users list:", allUsers);

        // // Updating a user
        // console.log("Updating user's data");
        // const updateResult = await userCollection.updateOne(
        //     { name: "parse" },
        //     { $set: { age: 20 } }
        // );
        // console.log("Update result:", updateResult);

        // // Deleting a user
        // console.log("Deleting a user");
        // const deleteResult = await userCollection.deleteOne({ name: "aaryan" });
        // console.log("Delete result:", deleteResult);

    } catch (err) {
        console.error("Error occurred:", err);
    } finally {
        // Closing the client
        await client.close();
    }
}

// Call the main function and catch errors
main().catch(console.error);
