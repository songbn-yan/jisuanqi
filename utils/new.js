var news=[
    {id:1,title:"abc"},
    {id:2,title:"def"},
    {id:3,title:"hyj"},
];
var tem={
    getAll:function(){
        return news;
    },
    getById:function(id){
        for(var i=0;i<news.length;i++){
            if(id===news[i].id){
                return news[i];
            }        
        }
        return null;
    }
};
module.exports = tem;