const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = './customer-data.xls'

async function convertcsvtojson(){
    const jsonArray = await csv().fromFile(csvFilePath);
    fs.writeFile('customer-data.json', JSON.stringify(jsonArray), function (error) {
        if (error) return console.error(error)
        console.log('The json file has been created!')
    })
}

convertcsvtojson()