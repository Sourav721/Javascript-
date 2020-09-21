let re=/hello/i;//i for case insensative;
str ="hello world";
str="world"

//exec() = return arrauy or null
let result=re.exec(str);
console.log(result);

//test() return true or false
result=re.test(str);
console.log(result);


//match() same as exec
str="hello world";
result = str.match(re);
console.log(result);

//replace()
str="world";
result = str.replace(re,"hi");
console.log(result); 

//meta character

re=/^hello/ //must be 1st letter

re=/world$/ //must be last letter

re=/^hello world$/; //must be 1st and last

re=/h.llo/ //match any character but required

re=/h*llo/ //match 0 or more character but not required

re=/he?llo/ //optional(either this cahracter or not)

str="htllo world"
regtest(re,str);

function regtest(re,str){
    if(re.test(str)){
       console.log(`${str} match ${re.source}`);
    }
    else{
       console.log(`${str} does not match ${re.source}`);
    }
}