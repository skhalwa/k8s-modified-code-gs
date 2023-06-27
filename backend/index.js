const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('working fine on staging api')
  res.send('testing staging api micro service ok woking fine still roll back');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
