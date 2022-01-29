const repeatString = function(string, num) {
        input = string;
        if(num == 0){
            return "";
        } else if(num > 0){
            for(let i = 1; i < num; i++){
                input+=string;
            }
            return input;
        }else{
            return 'ERROR';
        }
        
};

// Do not edit below this line
module.exports = repeatString;
