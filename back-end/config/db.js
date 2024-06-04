const { configDotenv } = require('dotenv')
const { default: mongoose } = require('mongoose')

configDotenv
 
const connectDB = async () =>  {
  try {
		await mongoose.connect(procces.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('MongoDB connected')
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}

module.exports = connectDB