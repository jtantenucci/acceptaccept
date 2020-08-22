import axios from 'axios'

export {getGameById, postGameByIdTeamA, postGameByIdTeamB};

var getGameById = function(id)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + ''
    , method: 'get'
    });
}



var postGameByIdTeamA = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/teamA'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdTeamB = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + '/teamB'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameById = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + ''
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var deleteGameById = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + ''
    , method: 'delete'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdVoteMap = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + '/voteMap'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameByIdVoteShuffle = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + '/voteShuffle'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var getGameByIdConfig = function(id)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + '/config'
    , method: 'get'
    });
}



var postGameByIdReady = function(id, body)
{
  return axios({ url: 'localhost:8081/game/' + encodeURIComponent(id) + '/ready'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postGameNew = function(body)
{
  return axios({ url: 'localhost:8081/game/new'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



var postAuthOpenid = function()
{
  return axios({ url: 'localhost:8081/auth/openid'
    , method: 'post'
    });
}



var getAuthOpenidReturn = function(openididentity)
{
  return axios({ url: 'localhost:8081/auth/openid/return' + '?openid.identity=' + encodeURIComponent(openididentity)
    , method: 'get'
    });
}
