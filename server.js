import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
import pdfmerger from './merge.js'
let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)
let app = express()
let port = 3000

app.use('/static', express.static('Public'))

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    // res.send({data : req.files})
    let ct = await pdfmerger(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`/static/${ct}.pdf`)
})

app.listen(port, () => {
    console.log('server at 3000')
})
