export const getTime = () => {
  let msg = ""
  let hours = new Date().getHours()
  if (hours <= 9) {
    msg = "早上好！"
  } else if (hours <= 12) {
    msg = "中午好！"
  } else if (hours <= 17) {
    msg = "下午好！"
  } else {
    msg = "晚上好！"
  }
  return msg
}
