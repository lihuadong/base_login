//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
            console.log('code:'+res.code)

            wx.getUserInfo({
                withCredentials:true,
                success:function(res){
                    var userInfo = res.userInfo
                    var nickName = userInfo.nickName
                    var avatarUrl = userInfo.avatarUrl
                    var gender = userInfo.gender //性别 0：未知、1：男、2：女
                    var province = userInfo.province
                    var city = userInfo.city
                    var country = userInfo.country

                    var iv  = userInfo.iv
                    var encryptedData  =  userInfo.encryptedData

                    console.log('iv:' + iv)
                }
                
            })

        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  selfData:{

  }
})