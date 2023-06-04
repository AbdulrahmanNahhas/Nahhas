--- 
title: "The Pillars of object-oriented programming with C++"
subtitle: "What is The pillars of object-oriented programming?"
date: "2023-5-24"
tags: ["OOP", "C++", "Programming", "Important", "Abstraction", "Encapsulation", "Inheritance", "Polymorphism"]
hidden: false
---

<p align="center">
  <img src="/images/OOP-1.png" alt="The Four Pillars of Object-Oriented Programming"/>
</p>

## The Four Pillars of OOP

Object Oriented Programming (OOP) is a programming paradigm that mainly focuses on objects. The four pillars of OOP are Inheritance, Polymorphism, Encapsulation, and Abstraction.

- Abstraction: Abstraction is the process of hiding the implementation details of an object and only showing the necessary information to the user. For example, a car has various parts such as an engine, wheels, steering, etc. The user does not need to know how each of these parts works, but only how to operate the car.

- Encapsulation: Encapsulation is the process of wrapping data and methods that operate on that data into a single unit called a class. This makes it easier to control access to data and prevents accidental modifications. For example, a bank account class would encapsulate the balance and transactions associated with the account.

- Inheritance: Inheritance is the process of creating new classes from existing ones. The new class (subclass) inherits the properties and methods of the existing class (superclass). This allows for code reuse and makes it easier to manage large projects. For example, a vehicle class could be a superclass for car, truck, and motorcycle subclasses.

- Polymorphism: Polymorphism allows objects of different classes to be treated as if they were of the same class. This is achieved through inheritance and interfaces. For example, a shape class could have subclasses such as square, circle, and triangle. Each subclass would have its own implementation of the area method, but they could all be treated as shapes and passed to a function that takes a shape object as a parameter.

---

### **Abstraction**

<p align="center">
  <img src="/images/OOP-2.png" alt="Abstraction Image 1"/> 
</p>

### C++ Example For **Abstraction**

```cpp
#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
  // pure virtual function
  virtual double getArea() = 0; // = 0 makes it pure virtual
};

// Derived classes
class Rectangle : public Shape {
public:
  Rectangle(double w, double h) {
    width = w;
    height = h;
  }
  double getArea() {
    return width * height;
  }
private:
  double width;
  double height;
};

class Circle : public Shape {
public:
  Circle(double r) {
    radius = r;
  }
  double getArea() {
    return 3.14 * radius * radius;
  }
private:
  double radius;
};

int main() {
  // Creating objects of derived classes
  Rectangle rect(10, 5);
  Circle circle(7);

  // Pointer to base class
  Shape *shape;

  // Accessing area of rectangle through pointer of base class
  shape = &rect;
  cout << "Area of rectangle is " << shape->getArea() << endl;

  // Accessing area of circle through pointer of base class
  shape = &circle;
  cout << "Area of circle is " << shape->getArea() << endl;

  return 0;
}
```

### Explanation:
- Abstraction is a fundamental concept in OOP that allows us to represent real-world objects in a simplified manner.
- In C++, Abstraction is implemented using Abstract classes which have pure virtual functions.
- Pure virtual functions are those functions that do not have any implementation in the abstract class, but their implementation is mandatory in the derived classes.
- The implementation of pure virtual functions in derived classes make them concrete classes which can be instantiated.
- In the above C++ code, Shape is an abstract class with a pure virtual function getArea(). Rectangle and Circle are the derived classes which implement getArea() function according to their specific shapes.
- The main function instantiates objects of derived classes and accesses their area through a pointer of base class. This demonstrates the abstraction concept where the user does not need to know the internal details of object implementation but only the simplified interface provided by the base class.

---

### **Encapsulation**

<p align="center">
  <img src="/images/OOP-3.png" alt="Encapsulation Image 1"/> 
</p>

### C++ Example For **Encapsulation**

```cpp
#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber; // Encapsulated variable
    string accountHolderName; // Encapsulated variable
    double accountBalance; // Encapsulated variable
public:
    void setAccountNumber(string accNo) {
        accountNumber = accNo;
    }
    void setAccountHolderName(string accName) {
        accountHolderName = accName;
    }
    void setAccountBalance(double accBal) {
        accountBalance = accBal;
    }
    string getAccountNumber() {
        return accountNumber;
    }
    string getAccountHolderName() {
        return accountHolderName;
    }
    double getAccountBalance() {
        return accountBalance;
    }
};

int main() {
    BankAccount myAccount;
    myAccount.setAccountNumber("1234");
    myAccount.setAccountHolderName("John Doe");
    myAccount.setAccountBalance(5000.50);
    cout << "Account Number: " << myAccount.getAccountNumber() << endl;
    cout << "Account Holder Name: " << myAccount.getAccountHolderName() << endl;
    cout << "Account Balance: $" << myAccount.getAccountBalance() << endl;
    return 0;
}
```

### Explanation:

This code demonstrates encapsulation in C++. Encapsulation is one of the four pillars of OOP, and it refers to the practice of hiding data within a class. In this example, the `BankAccount` class has three encapsulated variables: `accountNumber`, `accountHolderName`, and `accountBalance`. These variables are private, which means they can only be accessed from within the class itself. To access them from outside the class, we use public getter and setter methods.

The `setAccountNumber`, `setAccountHolderName`, and `setAccountBalance` methods are the setter methods for the encapsulated variables. They allow us to set the value of these variables from outside the class. The `getAccountNumber`, `getAccountHolderName`, and `getAccountBalance` methods are the getter methods for the encapsulated variables. They allow us to retrieve the value of these variables from outside the class.

In the `main` function, we create an instance of the `BankAccount` class called `myAccount`. We then use the setter methods to set the values of the encapsulated variables for this instance. Finally, we use the getter methods

---

### **Inheritance**

<p align="center">
  <img src="/images/OOP-4.png" alt="Inheritance Image 1"/> 
</p>

### C++ Example For **Inheritance**

```cpp
class Animal { // parent class
  public:
    void eat() {
      cout << "Eating..." << endl;
    }
};

class Dog : public Animal { // child class inheriting from Animal
  public:
    void bark() {
      cout << "Barking..." << endl;
    }
};

int main() {
  Dog myDog;
  myDog.eat(); // calling method from parent class
  myDog.bark(); // calling method from child class
  return 0;
}
```

### Explanation:

Inheritance is one of the four pillars of Object-Oriented Programming (OOP). It allows us to create a new class that inherits the properties and methods of an existing class, referred to as the parent or base class. In the example above, the `Dog` class is inheriting from the `Animal` class, which means `Dog` has access to the `eat()` method from `Animal`.

We use the `public` access modifier to indicate that the properties and methods of the parent class should be accessible to the child class. This enables us to extend the functionality of the parent class and create specialized classes that share common characteristics.

Inheritance promotes code reusability, as we can reuse the code from the parent class in our child classes without having to rewrite it. It also provides a way to create a hierarchy of related classes, where each child class adds new capabilities to the parent class.

---

### **Polymorphism**

<p align="center">
  <img src="/images/OOP-5.png" alt="Polymorphism Image 1"/> 
</p>

### C++ Example For **Polymorphism**

```cpp
#include <iostream>
using namespace std;

// Base class
class Shape {
   protected:
      int width, height;

   public:
      // Pure virtual function
      virtual int area() = 0;
};

// Derived class 1
class Rectangle: public Shape {
   public:
      int area () { 
         return (width * height); 
      }
};

// Derived class 2
class Triangle: public Shape {
   public:
      int area () { 
         return (width * height / 2); 
      }
};

int main () {
   // Declare pointers to base class and derived classes
   Shape *shape;
   Rectangle rec;
   Triangle  tri;

   // Point to derived class objects
   shape = &rec;

   // Call area method of derived class Rectangle
   shape->width = 5;
   shape->height = 4;
   cout << "Rectangle Area: " << shape->area() << endl;

   // Point to another derived class object
   shape = &tri;

   // Call area method of derived class Triangle
   shape->width = 5;
   shape->height = 4;
   cout << "Triangle Area: " << shape->area() << endl;

   return 0;
}
```

### Explanation:
- The above code demonstrates polymorphism in C++ through the use of virtual functions and inheritance.
- A base class "Shape" is declared with a pure virtual function "area" which will be overridden by derived classes.
- Two derived classes "Rectangle" and "Triangle" are created which inherit from the base class "Shape".
- Both derived classes implement the "area" method in their own way based on their unique shapes.
- In the main function, a pointer to the base class "Shape" is declared along with objects of the derived classes.
- The pointer is first pointed to the object of the derived class "Rectangle" and its "area" method is called, which returns the area of a rectangle.
- The pointer is then pointed to the object of the derived class "Triangle" and its "area" method is called, which returns the area of a triangle.
- This same pointer can be used to access other derived classes as well, allowing for "polymorphic" behavior where the same object can behave differently based on its context.

---

Note: I am still a student, and I may be wrong with some things. You can help me to improve the article on the Github.

-- *Abdulrahman Nahhas*