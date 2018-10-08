//Opdracht 1
const Tests = [
   {'course':'Computerscience Basics',
    'grade': 7
},

{'course':'Programming Basics',
'grade':8.6
},

{'course':'Studieloopbaan Ori\ëntatie',
'grade':5
},

{'course':'Gamedevelopment with TypeScript',
'grade': 6.7

},

];

 const getAverageGrade = function (){
    var total = 0;
    let grade = Tests.forEach(function(elements,index,array){
      return  total += element.grade;
    });

 };

 console.log(total/4)



     
