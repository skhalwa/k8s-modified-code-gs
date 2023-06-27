const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('working fine on staging backend')

  res.send('+++++++++++++++++++++++++++++++++++! Backend API MICROSERVICE working testing !+++++++++++++++++++++++++++++++++++++++++++++++++++++');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
