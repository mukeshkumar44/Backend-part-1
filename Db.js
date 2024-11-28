require("mongodb")

const {MongoClient}=require("mongodb")

const url= "mongodb+srv://mk8701952:muxoWpoYkeCoaTR7@mukeshverma.i9muq.mongodb.net/?retryWrites=true&w=majority&appName=MukeshVerma"


//how to connect db using 
const client = new MongoClient(url);
const dbName="user"
async function main(){
    await client.connect();
    console.log("Connected to database");
    const db = client.db(dbName);
    const collection = db.collection("users");
    console.log("intersting data in mongodb")
    const insertResult=await collection.insertMany([
        {name:"mukesh",
            age:25},
        {name:"mukesh verma",
            age:25},
    ])
    console.log("inserted data in mongodb")
    //find documents
    console.log("Finding documents");
    const findResult=await collection.find({age:{$age:25}}).toArray();
    console.log(findResult);
    //update Documents
    console.log("update documents");
    const updateResult=await collection.updateOne({name:"mukesh"},{$set:{profession:"senoir Engineer"}});
    console.log(updateResult);
    //delete documents
    console.log("delete documents");
    const deleteResult=await collection.deleteOne({name:"mukesh verma"});
    console.log(deleteResult);
    
    return"done";
}
main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close());
    

