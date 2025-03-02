import URL from "../models/urlModel.js";


const shortenURL = async (req, res) =>{
    const {longURL} = req.body;
    const shortID = Math.random().toString(36).substring(7);

    try {
        const newURL = new URL({longURL, shortID});
        await newURL.save();
        res.status(200).json({shortURL :`${req.protocol}://${req.get(host)}/${shortID}`});
    } catch (error) {
        res.status(500).json({message :"Server error"});
    }
};

export default shortenURL;