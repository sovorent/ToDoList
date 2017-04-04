var lists = [
{
	"id" : 1 ,
	"subject" : "task one",
	"content" : "my task one detail",
	"status" : "0"
},
{
	"id" : 2 ,
	"subject" : "task two",
	"content" : "my task two detail",
	"status" : "1"
}
];

exports.selectAll = function(){
	return lists;
};

exports.selectById = function(id){
	for(var i = 0; i < lists.length; i++) {
		if (lists[i].id == id) return lists[i];
	}
} 