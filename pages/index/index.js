Page({
  data:{
    result:0,
    first:"",
    last:"",
  },
// 显示数字
tap:function(e){
    var v=e.currentTarget.dataset.value;
    if (this.data.oprator){
        var last= this.data.last+v;
        this.setData({
            last:last,
            result:last
        })
    }else{
        var first=this.data.first+v;
        this.setData({
            first:first,
            result:first
        })
    }
},
//符号 
setoprator:function(e){
    var v=e.currentTarget.dataset.value;
    this.setData({
      oprator:v,
      result:v
    })
  },
// 运算
cal:function(e){
    var r;
    var f=parseFloat(this.data.first)
    var l=parseFloat (this.data.last)
    if(this.data.oprator){
      if(this.data.oprator==="+"){
        r=f+l;
      }else if(this.data.oprator==="-"){
        r=f-l;
      }else if(this.data.oprator==="*"){
        r=f*l;
      }else if(this.data.oprator==="/"){
        r=f/l;
      }
      this.setData({
        result:r,
        first:"",
        last:"",
        oprator:null
      })
    }
  },
  delete:function(e){
      this.setData({
        result:0,
        first:"",
        last:"",
        fuhao:null
      })
  }
})