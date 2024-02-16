const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
          let script = document.createElement("script")
          script.src = src
          script.onload = () => {
                  resolve(src + " Done Successfully")
          }
          document.head.append(script)
  })
}

let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Please this is not acceptable"))
    }, 3000)
  })
}

let a = async () => {
  try {
    let c = await p()
      console.log(c)
  }
  catch (err) {
    console.log("This error has been handled")
  }
}
  a()