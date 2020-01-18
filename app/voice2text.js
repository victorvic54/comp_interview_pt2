const util = require('util');
const fs = require('fs');
const axios = require('axios');

module.exports.getGrammarCoefficient = async function (message) {
    const apiKey = "G5N6SFwKo6XOhNms";
    
    return await axios.get("https://api.textgears.com/check.php" , {
        params: {
            text: message,
            api: apiKey
        }
    })
    .then(res => {
        const errorCount = res.data.errors.length;
        console.log("Message" + message)
        console.log(errorCount);
        const numWords = message.split(' ').length;
        console.log("Calculating gramar coefficient:  " + (errorCount/numWords).toPrecision(3));
        
        return (errorCount/numWords).toPrecision(3);
    })
    .catch(err => console.log(err))

}