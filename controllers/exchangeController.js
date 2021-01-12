const axios = require('axios');

exports.getRates = async (req, res, next) => {
    
    try {

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const formatDate = `${year}-${month}-${date}`;
        const apiUrl = await axios(
            `https://api.exchangeratesapi.io/latest?base=${req.query.base}&currency=${req.query.currency}`
            );
        const rates = apiUrl.data.rates;
        
        res.status(200).json({
            status: 'success',
            results: {
                base: req.query.base,
                date: formatDate,
                rates,
            }
        });
        

    } catch (error) {
        console.log(error);

        res.status(400).json({
            status: 'fail',
            message: 'Failed to fetch data. Please try again',
        });
    }
};