export function helloWorld() {
    type Increment = (x: number) => number
    const increment: Increment = x => x + 1




    setTimeout(() => {
        const element= document.getElementById("hello-world");
    
        if (element) {
          element.textContent = increment(1) + ""
        }
    },1000)

}