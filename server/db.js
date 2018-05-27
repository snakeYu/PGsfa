// 引入mockjs文件
const Mock = require('mockjs')
const Random = Mock.Random
module.exports = function() {
  let data = {
    progress: {
      title: '2016年11月',
      chartDate: [
        {
          name: '月时间进度',
          data: 16,
          percent: '16%'
        },
        {
          name: '月销售完成度',
          data: 74,
          percent: '74%'
        },
        {
          name: '有效商店数',
          data: 0,
          percent: '169'
        }
      ]
    },
    // 用户
    user: [{ id: 1, name: '张三' }],
    // 用户签到
    // {userid: 1, date: Fri May 25 2018 17:43:25 GMT+0800 (中国标准时间), storeId: "D1", photo: Array(3), note: ""}
    sign: [],
    // 商店列表
    storeDate: [],
    // 货物列表
    goodsList: [],
    // 购物车
    goodsCart: []
  }
  var images = [1, 2, 3].map(x =>
    Random.image('200x100', Random.color(), Random.word(2, 6))
  )
  for (let i = 1; i < 10; i++) {
    let content = Random.cparagraph(0, 10)
    data.storeDate.push({
      id: i,
      ID: 'D' + i, // 店铺ID
      title: Random.cword(2, 5), // 店铺名称
      addr: 12, // 店铺位置
      date: 1231, // 创建时间
      manager: '张三', // 店长
      phone: 1232343453, // 手机号
      plan: 0, // 计划：0计划内，1计划外
      sell: {
        // 销量
        mtd: 123, // 本月至今销量
        mean: 123, // 过往半年月均销量
        percent: '20%' // 核心分销完成率
      }
    })
    data.goodsList.push({
      id: i,
      img: 'images', // 图片
      goodsname: Random.cword(2, 5), // 商品名
      goodsId: '编号', // 编号
      pirce: '123', // 价格
      repertory: '库存', // 库存
      spec: '规格', // 规格
      addr: [Random.cword(2, 5)] // 地址
    })
  }
  return data
}
