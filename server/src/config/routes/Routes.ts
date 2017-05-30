/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import UploadRoutes = require('../routes/UploadRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        app.use("/", new UploadRoutes().routes);
        return app;
    }
}
export = Routes;