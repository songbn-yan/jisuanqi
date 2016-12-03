var app=getApp();
var x=require("../../utils/new.js")
Page({
    data:{
        username:app.userName,
        topS:[]
    },
    tapName: function(event) {
        console.log(event)
    },
     bindViewTap:function(event){
        event.target.dataset.alphaBeta 
        event.target.dataset.alphabeta 
    },
    onLoad:function(){
      
    },
    onShow:function(){
       
    },
     onReady:function(){
        var self=this;
        wx.request({
            url:"http://zhihuapi.duapp.com/getnews",
            success:function(data){
                console.log(data)
                var top =data.data.top_stories;
                for(var i=0;i<top.length;i++){
                    top[i].image="https://images.weserv.nl?url="+top[i].image.slice(7)+"&w=300";
                }
                self.setData({
                    topS:top
                })
            }
        })
    },
    onHide:function(){
       
    },
    onUnload:function(){
       
    },
    onPullDownRefresh:function(){
        console.log("111")
    },
    onReachBottom:function(){
        console.log("222")
    },
    click:function(){
        console.log(x.getAll())
    },
    click:function(){
        console.log(x.getAll())
    }




    // PI:MATH,
    // random:function(){
    //     this.user;
    //     console.log(app.random());
    // },
    // abc:function(){
    //     this.random();
    // },
})


