const validateURL = (req, res, next) =>{
    const { longURL } = req.body;
    try {
        new URL (longURL);
        next();
    } catch (error) {
        res.status(400).json({success: false, message:"Invalid url"});
    };
};

export default validateURL;