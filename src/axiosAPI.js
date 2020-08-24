
var getGameById = function(id)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + ''
    , method: 'get'
    });
}



var postGameByIdTeamA = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + '/teamA'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdTeamB = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + '/teamB'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameById = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + ''
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var deleteGameById = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + ''
    , method: 'delete'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdVoteMap = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + '/voteMap'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdVoteShuffle = function(id, body)
{
  return axios({ url: '/game/' + encodeURIComponent(id) + '/voteShuffle'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameNew = function(body)
{
  return axios({ url: '/game/new'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postAuthOpenid = function()
{
  return axios({ url: '/auth/openid'
    , method: 'post'
    });
}



var getAuthOpenidReturn = function(openididentity)
{
  return axios({ url: '/auth/openid/return' + '?openid.identity=' + encodeURIComponent(openididentity)
    , method: 'get'
    });
}

