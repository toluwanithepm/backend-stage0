const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();


const PORT = process.env.PORT || 3000;


app.use(cors()); 
app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.get('/me', async (req, res) => {
  try {
   
    const timestamp = new Date().toISOString();

  
    let catFact = 'Cat fact unavailable at the moment.';
    
    try {
      const catFactResponse = await axios.get('https://catfact.ninja/fact', {
        timeout: 5000 
      });
      
     
      if (catFactResponse.data && catFactResponse.data.fact) {
        catFact = catFactResponse.data.fact;
      }
    } catch (catApiError) {
      
      console.error('Error fetching cat fact:', catApiError.message);
      
    }

    const response = {
      status: 'success',
      user: {
        email: 'goldenwritertolu@gmail.com',        
        name: 'Toluwani Oluwamuyiwa',                  
        stack: 'Node.js/Express'                 
      },
      timestamp: timestamp,
      fact: catFact
    };


    res.status(200)
       .header('Content-Type', 'application/json')
       .json(response);

  } catch (error) {
    console.error('Unexpected error in /me endpoint:', error);
    
    res.status(500)
       .header('Content-Type', 'application/json')
       .json({
         status: 'error',
         message: 'Internal server error',
         timestamp: new Date().toISOString()
       });
  }
});
app.get('/', (req, res) => {
  res.json({
    message: 'Backend Wizards Stage 0 API',
    endpoints: {
      profile: '/me'
    },
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});


app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
    path: req.url
  });
});


app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});


app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}/me`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('=================================');
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});