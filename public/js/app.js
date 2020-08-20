

async function handleSearchClick(event) {
    event.preventDefault();
    try {
        const response = await axios.get('api/itunes?term=dave mathews');
        console.log(response.data.results);
    } catch (error) {
        console.error(error);
    }
}

function addSong(event, data = {}) {
    event.preventDefault();

    // Massage your data here before sending it to the API to
    // avoid Unexpected Identifyer errors

    // ex. const formattedData = {
    //        artist_name: `${someFormattingFunction(data.artist_name)}
    //        ...
    // }
    //
    // and then pass formattedDate instead of data below on line 29
    axios
        .post('/api/playlist', {
            data,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function someFormattingFunction(str) {
    return str.replace(/[^\x20-\x7E]/g, '');
}
