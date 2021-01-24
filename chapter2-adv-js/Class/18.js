class Person {
  walk() {
    console.log('walk');
  }
}

class Korean {
  sayHello() {
    console.log('HI');
  }
}
class KoreanPerson extends Korean, Person {}

function getParents(){
    return class extends Korean {
        walk(){
            console.log('walk')
        }
    }
}