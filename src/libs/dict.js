const classes = [
    {k: '0', v: '名木'},
  {k: '1', v: '一级古树'},
  {k: '2', v: '二级古树'},
  {k: '3', v: '三级古树'}
]
const ownership = [
    {k: '0', v: '国有'},
  {k: '1', v: '集体'},
  {k: '2', v: '个人'},
  {k: '3', v: '其他'}
]
const status = [
    {k: '0', v: '正常株'},
  {k: '1', v: '衰弱株'},
  {k: '2', v: '濒危株'},
  {k: '3', v: '死亡株'}
]
const env = [
  {k: '0', v: '好'},
  {k: '1', v: '中'},
  {k: '2', v: '差'}
]
const aspect = [
  {k: '0', v: '平地'},
  {k: '1', v: '东'},
  {k: '2', v: '西'},
  {k: '3', v: '南'},
  {k: '4', v: '北'},
  {k: '5', v: '东南'},
  {k: '6', v: '东北'},
  {k: '7', v: '西南'},
  {k: '8', v: '西北'},
]
const slope = [
  {k: '0', v: '平坡'},
  {k: '1', v: '缓坡'},
  {k: '2', v: '斜坡'},
  {k: '3', v: '陡坡'},
  {k: '4', v: '急坡'},
  {k: '5', v: '险坡'}
]
const position = [
  {k: '0', v: '平地'},
  {k: '1', v: '脊部'},
  {k: '2', v: '上部'},
  {k: '3', v: '中部'},
  {k: '4', v: '下部'},
  {k: '5', v: '山谷'}
]
const compactness = [
    {k: '0', v: '极紧密'},
  {k: '1', v: '紧密'},
  {k: '2', v: '中等'},
  {k: '3', v: '较疏松'},
  {k: '4', v: '疏松'}
]
const distribution = [
  {k: '0', v: '群状'},
  {k: '1', v: '散生'}
]

export default {
  classes,
  ownership,
  status,
  env,
  aspect,
  slope,
  position,
  compactness,
  distribution
}
