const  express = require('express');
const  app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());

const UserRoutes = require('./Routes/UserRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')
const RegionRoutes = require('./Routes/RegionRoutes')
const DeviceRoutes = require('./Routes/DeviceRoutes')
const FireRoutes = require('./Routes/FireRoutes')
const NotificationRoutes = require('./Routes/NotificationRoutes')

app.use('/user', UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/region', RegionRoutes)
 app.use('/device', DeviceRoutes)
app.use('/fire', FireRoutes)
app.use('/alert', NotificationRoutes)

app.get('/',(req,res)=>{
    res.send('testing')
})

app.listen(8000, ()=>{
    console.log('app listning on port : 8000 ' )
})