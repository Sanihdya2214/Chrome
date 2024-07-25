import mongoose from "mongoose"


const mongoconnect = async () => {
      try {
          const connectdb = await mongoose.connect(
            process.env.MONGO_DB_CONNECT,
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            }
          );
     console.log(`MongoDB Connected: ${connectdb.connection.host}`)
      } catch (error) {
         console.error(`Error: ${error.message}`);
         process.exit(1);
      }
 
}

export default mongoconnect