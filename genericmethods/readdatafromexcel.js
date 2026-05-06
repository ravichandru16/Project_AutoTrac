const excel = require("exceljs");
const path = require("node:path");
import ran from "../genericmethods/mathfunctions.js"

class ExcelUtils {
    async readDataFromExcel() {
        const book = new excel.Workbook();
        await book.xlsx.readFile(path.join(__dirname, "../test_data/testdata.xlsx"));
        const sheet = await book.getWorksheet("Sheet1");

        const testdata = [];
        for (let i = 1; i <= sheet.actualRowCount; i++) {
            const fname = sheet.getRow(i).getCell(1).toString();
            const lname = sheet.getRow(i).getCell(2).toString();
                let mobile=this.randommobile()
                testdata.push({ fname:fname, lname:lname ,mobile:(await mobile).toString()});
        }

        return testdata;
    }

    async randommobile()
    {
        return Math.floor(Math.random()*(9999999999-6000000000+1)+6000000000)
    }
}

module.exports = ExcelUtils;
