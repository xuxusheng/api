var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getList', function(req, res) {

	// sendData 用来存将要被发送的数据
	// name 表示被请求的那一组 API
	var sendData = '';
	var name = req.query.name;

	// 判断请求的是哪一组 API 的数据
	switch(name) {
		case 'card':
			sendData = {
				"name": "card",
				"content": [
			        {
			            "id": "card.list", 
			            "url": "/admin/card/list", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "card.attachTag", 
			            "url": "/admin/card/attach-tag", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "card.detachTag", 
			            "url": "/admin/card/detach-tag", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "card.create", 
			            "url": "/admin/card/create", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "card.delete", 
			            "url": "/admin/card/delete", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "card.sourceList", 
			            "url": "/admin/card/list-tag-source", 
			            "method": "POST", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }
			    ]
			}; break;
		case 'note':
			sendData = {
		    	"name": "note",
		    	"content": [
			        {
			            "id": "note.list", 
			            "url": "/admin/notification/list", 
			            "method": "GET", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "note.create", 
			            "url": "/admin/notification/create", 
			            "method": "post", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "note.get", 
			            "url": "/admin/notification/get", 
			            "method": "post", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true
			            }
			        }, 
			        {
			            "id": "note.send-msg", 
			            "url": "/admin/notification/send", 
			            "method": "post", 
			            "options": {
			                "cached": false, 
			                "withCredentials": true, 
			                "requestSchema": {
			                    "type": "object", 
			                    "required": [
			                        "nid", 
			                        "uids"
			                    ], 
			                    "properties": {
			                        "nid": {
			                            "type": "id"
			                        }, 
			                        "uids": {
			                            "type": "array", 
			                            "items": {
			                                "type": "id"
			                            }
			                        }
			                    }
			                }
			            }
			        }
		    	]
			}; break;
        case 'query':
            sendData = {
                "name": "query",
                "content": [
                    {
                        "id": "query.trans2human",
                        "url": "/admin/query/trans2human",
                        "method": "GET",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "invite.codeList",
                        "url": "/admin/invitecode/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "invite.generateCode",
                        "url": "/admin/invitecode/generate",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.userList",
                        "url": "/admin/user/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.userStatusCheck",
                        "url": "/admin/user/check",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.userGetPerms",
                        "url": "/admin/user/roleandpermission",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.userPermsInfo",
                        "url": "/admin/user/new-roleandpermission",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.saveUserType",
                        "url": "/admin/user/set-usertype",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "user.userShow",
                        "url": "/admin/user/show",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "role.roleList",
                        "url": "/admin/role/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "role.roleShow",
                        "url": "/admin/role/show",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "role.createRole",
                        "url": "/admin/role/create",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "role.deleteRole",
                        "url": "/admin/role/remove",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.permsList",
                        "url": "admin/permission/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.permsDetailList",
                        "url": "admin/permission/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.searchPerms",
                        "url": "admin/permission/list",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.removePerms",
                        "url": "/admin/permission/remove",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.createEsPerms",
                        "url": "/admin/permission/createes",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "perms.createUserPerms",
                        "url": "/admin/permission/createusr",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "mc.showSource",
                        "url": "/admin/source/detail/get",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "mc.getSourceByField",
                        "url": "/admin/source/field/get",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "card.cardResultList",
                        "url": "/admin/card/list-result",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "card.cardResultRefresh",
                        "url": "/admin/card/recompute",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "tagBatch.bindTagType",
                        "url": "/admin/tag/attach-tagtype",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "tagBatch.getTagType",
                        "url": "/admin/tag/many-tagtype",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "mc.generateTag",
                        "url": "/admin/tag/generate",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "query.list",
                        "url": "/admin/tag/list-user-tags",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "query.unwrap",
                        "url": " /admin/tag/delete-user-tags-relation",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "query.bindTagType",
                        "url": "/admin/tag/create-user-tags",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    },
                    {
                        "id": "query.changeStatus",
                        "url": "/admin/tag/change-user-tags-status",
                        "method": "POST",
                        "options": {
                            "cached": false,
                            "withCredentials": true
                        }
                    }
                ]
            }
	}

	res.json(sendData);


});

router.get('/getSide', function(req, res) {
    res.json([
        {
            "name": "card",
            "content": ["card.list", "card.attachTag", "card.detachTag", "card.create", "card.delete", "card.sourceList"]
        },
        {
            "name": "note",
            "content": ["note.list", "note.create", "note.get", "note.send-msg"]
        },
        {
            "name": "query",
            "content": ["query.trans2human","invite.codeList","invite.generateCode","user.userList","user.userStatusCheck","user.userGetPerms","user.userPermsInfo","user.saveUserType","user.userShow","role.roleList","role.roleShow","role.createRole","role.deleteRole","perms.permsList","perms.permsDetailList","perms.searchPerms","perms.removePerms","perms.createEsPerms","perms.createUserPerms","mc.showSource","mc.getSourceByField","card.cardResultList","card.cardResultRefresh","tagBatch.bindTagType","tagBatch.getTagType","mc.generateTag","query.list","query.unwrap","query.bindTagType","query.changeStatus"]
        }
    ]);
});

module.exports = router;
