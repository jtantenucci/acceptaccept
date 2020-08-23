import axios from "axios"
export var getGameById = function(id)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + ''
    , method: 'get'
    });
}



export var postGameByIdTeamA = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/teamA'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdTeamB = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/teamB'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdUndecided = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/undecided'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var deleteGameById = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + ''
    , method: 'delete'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdVoteMap = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/voteMap'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdVoteShuffle = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/voteShuffle'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var getGameByIdConfig = function(id)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/config'
    , method: 'get'
    });
}



export var postGameByIdReady = function(id, body)
{
  return axios({ url: 'http://localhost:8081/game/' + encodeURIComponent(id) + '/ready'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameNew = function(body)
{
  return axios({ url: 'http://localhost:8081/game/new'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postAuthOpenid = function()
{
  return axios({ url: 'http://localhost:8081/auth/openid'
    , method: 'post'
    });
}



export var getAuthOpenidReturn = function(openididentity)
{
  return axios({ url: 'http://localhost:8081/auth/openid/return' + '?openid.identity=' + encodeURIComponent(openididentity)
    , method: 'get'
    });
}
