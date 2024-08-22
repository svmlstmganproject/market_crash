const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Schemas and Models
 
// Schema for 'dax_1day_drawdown_EF2_2_1_1_Ta' (new)
const Dax1DayDrawdownEF2_2_1_1_TaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    time: String,
    no_: Number,
    closedPrice: Number,
    ReturnOfDax: Number,
    directionOfDax: Number,
    CrashIndicatorDax_10__: Number,
    drawdown: Number,
    error_m_1_: Number,
    PredictedDrawdown_m_1_: Number,
    TargetDrawdown_m_1_: Number,
    error_m_2_: Number,
    PredictedDrawdown_m_2_: Number,
    TargetDrawdown_m_2_: Number,
    error_m_3_: Number,
    PredictedDrawdown_m_3_: Number,
    TargetDrawdown_m_3__1: Number
}, { collection: 'dax_1day_drawdown_EF2_2_1_1_Ta' });

const Dax1DayDrawdownEF2_2_1_1_TaModel = mongoose.model('Dax1DayDrawdownEF2_2_1_1_Ta', Dax1DayDrawdownEF2_2_1_1_TaSchema);

const Dax1DayDurationEF2Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    crashEndRow: Number,
    crashEndDay: String,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number,
    sizeError_m_3_: Number,
    predictedSize_m_3_: Number,
    targetSize_m_3_: Number
}, { collection: 'dax_1day_duration_EF2_2_1_1_Ta' });

const Dax1DayDurationEF2Model = mongoose.model('Dax1DayDurationEF2', Dax1DayDurationEF2Schema);

const Dax1DayMseEF2Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    covidMSEDrawdown_m_1_: Number,
    covidMSEDrawdown_m_2_: Number,
    covidMSEDrawdown_m_3_: Number,
    ukraineMSEDrawdown_m_1_: Number,
    ukraineMSEDrawdown_m_2_: Number,
    ukraineMSEDrawdown_m_3_: Number,
    chinaMSEDrawdown_m_1_: Number,
    chinaMSEDrawdown_m_2_: Number,
    chinaMSEDrawdown_m_3_: Number
}, { collection: 'dax_1day_mse_EF2_2_1_1_Ta' });

const Dax1DayMseEF2Model = mongoose.model('Dax1DayMseEF2', Dax1DayMseEF2Schema);

const Dax1HrDrawdownEF2Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    time: String,
    no_: Number,
    closedPrice: Number,
    xReturn: Number,
    directionOfDAX: Number,
    CrashIndicatorDAX_5__: Number,
    drawdown: Number,
    error_m_1_: Number,
    PredictedDrawdown_m_1_: Number,
    TargetDrawdown_m_1_: Number,
    error_m_2_: Number,
    PredictedDrawdown_m_2_: Number,
    TargetDrawdown_m_2_: Number,
    error_m_3_: Number,
    PredictedDrawdown_m_3_: Number,
    TargetDrawdown_m_3__1: Number
}, { collection: 'dax_1hr_drawdown_EF2_2_1_7_Ta' });

const Dax1HrDrawdownEF2Model = mongoose.model('Dax1HrDrawdownEF2', Dax1HrDrawdownEF2Schema);

// Schema for 'dax_1hr_duration_EF2_2_1_7_Ta'
const Dax1HrDurationEF2Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    no_: Number,
    peakRow: Number,
    peakDay: String,
    peakPrice: Number,
    crashEndRow: Number,
    crashEndDay: String,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number
}, { collection: 'dax_1hr_duration_EF2_2_1_7_Ta' });

const Dax1HrDurationEF2Model = mongoose.model('Dax1HrDurationEF2', Dax1HrDurationEF2Schema);
 
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb+srv://svmlstmganproject:G80qmnC3nOo0GnIX@cluster0.pupsn.mongodb.net/LSTM?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connection to MongoDB is successful!'))
   .catch(err => console.error('MongoDB connection error:', err));

// Existing endpoints
  
const Dax1HrMseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSEDrawdown_m_1_: Number,
    MSEDrawdown_m_2_: Number,
    MSEDrawdown_m_3_: Number
}, { collection: 'dax_1hr_mse_EF2_2_1_7_Ta' });

const Dax1HrMseModel = mongoose.model('Dax1HrMse', Dax1HrMseSchema);


app.get('/getHitRatioPiwData', (req, res) => {
   HitRatioPiwModel.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
});

 
app.get('/getDax1DayDurationEF2Data', (req, res) => {
    Dax1DayDurationEF2Model.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });
 app.get('/getDax1DayDrawdownEF2_2_1_1_TaData', (req, res) => {
    Dax1DayDrawdownEF2_2_1_1_TaModel.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });
 app.get('/getDax1DayMseEF2Model', (req, res) => {
    Dax1DayMseEF2Model.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });
 app.get('/getDax1HrDrawdownEF2Data', (req, res) => {
    Dax1HrDrawdownEF2Model.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });


 app.get('/getDax1HrDurationEF2Data', (req, res) => {
    Dax1HrDurationEF2Model.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get('/dax_1hr_mse_EF2_2_1_7_Ta', async (req, res) => {
    const data = await Dax1HrMseModel.find({});
    res.send(data);
});

 // Start the server on port 3011
 app.listen(3051, () => {
    console.log("Server is running on port 3051");
 });