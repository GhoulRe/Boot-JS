// Declare a variable called 'timer' to store the timer ID
// Return an anonymous function that takes in any number of arguments
// Clear the previous timer to prevent the execution of 'mainFunction'
// Set a new timer that will execute 'mainFunction' after the specified delay
const debounce = (mainFn,delay) => {
    let timer;

    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            mainFn(...args);
        },delay);
    };
};



function searchData(){
    console.log("search data executed");
    
}

const debouncedSearch = debounce(searchData,3000)

debouncedSearch();