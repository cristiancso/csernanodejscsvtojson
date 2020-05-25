const csvFilePath = './customer-data.xls'
const csv = require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    console.log(jsonObj)
})

async function convertcsvtojson(){
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray
}
console.log(convertcsvtojson())