const data_farmshop = require ('../data/farmshop.json')
const fertilizer_stat = require ('../data/fertilizer_stat.json')
const seed_stat = require ('../data/seed_stat.json')
const watering_pot_stat = require ('../data/watering_pot_stat.json')

function get(req)
{
    let result = JSON.stringify({message: 'API not found'})
    console.log(req)

    if (req.url === '/api/farmshop')
    {
        result = JSON.stringify(data_farmshop)
    }

    if (req.url === '/api/fertilizer_stat')
    {
        result = JSON.stringify(fertilizer_stat)
    }

    if (req.url === '/api/seed_stat')
    {
        result = JSON.stringify(seed_stat)
    }

    if (req.url === '/api/watering_pot_stat')
    {
        result = JSON.stringify(watering_pot_stat)
    }

    return result
}

module.exports = get