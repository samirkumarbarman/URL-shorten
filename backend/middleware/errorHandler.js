const errorHandler = (err, req, res, next) =>{
    console.error(`Errot :${err.message}`);
    res.status(err.status || 500 ).json({
        success : false,
        message : err.message || "Internal server Error",
    });
};

export default errorHandler;