/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher = {
    firstName: 'Jimmy',
    lastName: 'Hendrix',
    fullTimeEmployee: false,
    yearsOfExperience: 12,
    location: 'Washington',
    contract: false,
};
console.log(teacher);
var director = {
    firstName: 'Jimmy',
    lastName: 'Hendrix',
    location: 'Washington',
    fullTimeEmployee: true,
    contract: true,
    numberOfReports: 17,
};
console.log(director);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('Jimmy', 'Hendrix');
console.log(student.workOnHomework());
console.log(student.displayName());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFTQSxJQUFNLE9BQU8sR0FBWTtJQUN2QixTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsU0FBUztJQUNuQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFNckIsSUFBTSxRQUFRLEdBQWM7SUFDMUIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsSUFBSTtJQUNkLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBTXRCLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQVMsRUFBRSxRQUFRO0lBQzNELE9BQU8sVUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDMUMsQ0FBQztBQWNEO0lBSUksc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCB0ZWFjaGVyOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKaW1teScsXG4gIGxhc3ROYW1lOiAnSGVuZHJpeCcsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICB5ZWFyc09mRXhwZXJpZW5jZTogMTIsXG4gIGxvY2F0aW9uOiAnV2FzaGluZ3RvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIpO1xuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gICAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IGRpcmVjdG9yOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0ppbW15JyxcbiAgbGFzdE5hbWU6ICdIZW5kcml4JyxcbiAgbG9jYXRpb246ICdXYXNoaW5ndG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgY29udHJhY3Q6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuY29uc29sZS5sb2coZGlyZWN0b3IpO1xuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZVswXX0uICR7bGFzdE5hbWV9YDtcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvckNsYXNzIHtcbiAgICBuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudEludGVyZmFjZUNsYXNzO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudEludGVyZmFjZUNsYXNzIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cblxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudEludGVyZmFjZUNsYXNzIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICB9XG5cbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0N1cnJlbnRseSB3b3JraW5nJztcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxufVxuXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcygnSmltbXknLCAnSGVuZHJpeCcpO1xuY29uc29sZS5sb2coc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=