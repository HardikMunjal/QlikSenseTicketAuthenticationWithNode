                                          SSO Process

1: User get validated to our application authentication module.
2: After Successful Authentication, we will keep  user_id and domain of user_directory
3: Now when we hit  http://QlikSense_hclserver_ip/{proxy_name}/hub , it will redirect us to our http://hcl_application_server_ip/authenticate?proxyRestUri={proxyRestUri}&targetId={targetId}
4: then we will make a POST request regarding

var json ={
 "name": "Emploee",
 "children": [{
    "fieldA": {
        "title": "Food Factory",
        "children": [{
            "name": "Oscar",
            "id": "0023"
        }, {
            "name": "Tikka",
            "employee": [{
                "name": "Tim"
            }, {
                "name": "Joe"
            }]
        }],
        "address": ["3 Lame Road", "Grantstown"]
    },
    "description": "A fresh new food factory"
}, {
    "fieldA": {
        "title": "Kindom Garden",
        "children": [{
            "name": "Ceil",
            "id": "54"
        }, {
            "name": "Pillow",
            "employee": [{
                "name": "Amst"
            }, {
                "name": "Tom"
            }]
        }],
        "address": ["24 Shaker Street", "HelloTown"]
    },
    "description": "Awesome castle"
}]
};

