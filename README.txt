root resources access url

http://localhost:3000/api/rootresources

POST req body
{
"type" : "AUTOS", "name" : "autos", "address" : "auso mart", "description" : "xxxxxxxxxxxxxxxxx", "category" : { "id" : "10", "group" : "Ceylon Hotel corporation" }, "resources" : [ 10, 20, 30, 40, 50, 60 ] }

----------------------------------------------

resources access url

http://localhost:3000/api/resources

{
      "type": "DULEX",
      "resource": "room",
      "description":"Resource POST request test",
      "items": [
        "1 bedroom",
        "Attach bathroom",
        "A/C"
      ],
      "images": [
        "1.jpg",
        "2.jpg",
        "3.jpg"
      ],
      "constraints": [
	{
	"key":"HEAD",
        "value":"adult:1,child:1"
	}
      ],
      "price": "1000",
      "status": "available"
}

-----------------------------------------------
