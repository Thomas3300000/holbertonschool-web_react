/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZQTtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0I7SUFDbkMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYRyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDM0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgICB9XG5cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCJcbiAgICB9XG5cbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XG4gICAgfVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiO1xuICAgIH1cblxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgICB9XG5cbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBUZWFjaGVyIHwgRGlyZWN0b3Ige1xuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9