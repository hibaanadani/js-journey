function generateReports(student){
    //first array method to use is map to iterate over the array of students and creare a new array of objects with the name, average and grade of each student
    return student.map(student => { //time complexity of map is O(n) where n is the number of students in the array
        const totalScore = student.scores.reduce((sum, score) => sum + score, 0); // 2nd array method to get the total score of each student, time complexity of reduce is O(n) where n is the number of scores in the array
        const average = Math.round(totalScore / student.scores.length); // 3rd array method to get the average score of each student rounded, time complexity of this is O(1) because we are just doing a simple calculation

        let grade; //using let instead of const because we are going to change the value of grade later on
        if (average >= 90) {
          grade = "A";
        } else if (average >= 80) {
          grade = "B";
        } else if (average >= 70) {
          grade = "C"; 
        } else if (average >= 60) {
          grade = "D";
        } else {
          grade = "F"; 
        }

        return { name: student.name, average, grade };//for return we use {} not ()
});//add ; at the end 
}
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
  // Time complexity O(n)
