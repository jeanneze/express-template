const express = require('express')
const router = require('./router')

// 加一个注释，用以说明，本项目代码可以任意定制更改
const app = express()

const PORT = process.env.PORT || 3009

// 挂载路由
app.use('/api', router)
// 数据转json的中间件挂载
app.use(express.json())

// 挂载统一处理服务端错误中间件
// app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
