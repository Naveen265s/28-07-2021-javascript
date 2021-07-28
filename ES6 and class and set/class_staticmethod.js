class Foo{
    static M(){
        return 'Hello';
    }
}
class Bar extends Foo{

}
class Jar extends Foo{
    static M(){
        return super.M() + 'too';
    }
}
console.log(Foo.M());

console.log(Jar.M());

console.log(Bar.M()); //static method invoke using class_name
