import React from 'react';
import axios from 'axios';




    var postAuthOpenid = function()
    {
    return axios({ url: '/auth/openid'
        , method: 'post'
        });
    }
