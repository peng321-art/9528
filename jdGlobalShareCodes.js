/*
环球挑战赛互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京环球挑战赛的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 GlobalShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let GlobalShareCodes = [
  'OEdFZ1pnaXA4VWE1a3dxVUxNbHhiQT09dq@bjE3ZE45azI3aG1iVjlCVllzZk5wZGhYY0tVU2ozSy9FMVpRZ1h2QjNtST0=@bjhEbEtxZlFwWWR2Ujl0Q24zdFk1QT09@MXlnR2RyYkR1Z1ZoaFE2LzJZc2RNYzFaYnNRcklXT0xybnI5cUsvYi94WT0=@d1lBWCt6QWhHRzQyUEJWdy9JMUhYUHA3N2JrdEtyb29iNlhCNG1iQlpLYz0=@NGlDMXFRbzJhTU0rWmRsK1lIcWtOZz09',//账号一的好友shareCode,不同好友中间用@符号隔开
  'SVFmaDQzbitOVkRsaFNZSFBZZFpVdz09@SVJFQVg0UTlpZVlpUThJM0xFSVFLRXF4eWt1dkxIMmRCSlVsRkdWU0g3az0=@Mmh0ay9oeWQzTmV1NlQrUWpsWldvQT09',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有环球挑战赛互助码
if (process.GLOBALSHARECODES) {
  if (process.GLOBALSHARECODES.indexOf('&') > -1) {
    console.log(`您的环球挑战赛互助码选择的是用&隔开\n`)
    GlobalShareCodes = process.GLOBALSHARECODES.split('&');
  } else if (process.GLOBALSHARECODES.indexOf('\n') > -1) {
    console.log(`您的环球挑战赛互助码选择的是用换行隔开\n`)
    GlobalShareCodes = process.GLOBALSHARECODES.split('\n');
  } else {
    GlobalShareCodes = process.GLOBALSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < GlobalShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['GlobalShareCode' + index] = GlobalShareCodes[i];
}
