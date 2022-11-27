/*HTTP 1.1 VS HTTP2

HTTP 1.1

  The HTTP 1.1 was introduced in 1997.The HTTP 1.1 was intoduced to overcome the terminating process of each request
for Ex. if a request is hello,after the reply the page will be terminated.The next request can be given only after the page 
terminated.To overcome this problem keep alive header was intoduced in http 1.1.So,the request will be queue and multiple
request and response per TCP connection.Using Pipelining the second request is sent before the result of the first request 
is displayed.By,using if match and entity tags the catche is controlled.The http 1.1 send the request on text basis and 
receives the response in the form of text.The request uses the Get Method the which asks for data from the host.
The client discovers that the full rendering of the page requires these additional resources from the server only after 
it downloads the page. Because of this, the client will have to make additional requests to retrieve these resources. 
In HTTP/1.0, the client had to break and remake the TCP connection with every new request,it uses more resourses and time.
It uses requests resource Inlining for use getting multiple pages.It compresses data by itself.



HTTP 2.0
	
	The HTTP 2.0 was introduced in the year 2015 by google to faster and efficient response.The HTTP 2.0 uses binary 
commands.This feature greatly increases efficiency in terms of security, compression and multiplexing.Uses multiplexing,
where over a single TCP connection resources to be deliveredand arrive at the client almost at the same time. It is 
done using streams which can be prioritized, can have dependencies and individual flow control. It also provides a feature 
called server push that allows the server to send data that the client will need but has not yet requested.HTTP/2 does not 
change much in terms of caching.With the server push feature if the client finds the resources are already present in the 
cache,it can cancel the pushed stream.It uses multiplexing and reduces time in loading page and less sensitive in network 
delays.With the server push feature if the client finds the resources are already present in the cache, it can cancel the 
pushed stream.*/


/* Objects
In javascript object is one of the important data type.Objects are more complex and each object may contain any combination primitive 
data-types as well as reference data-types.An object,is a reference data type.Variables that are assigned a reference value are given 
a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The 
variables doesn't actually store the value.Object properties are basically the same as ordinary JavaScript variables, except for the 
attachment to objects. The properties of an object define the characteristics of the object.Every object has some property associated
 with some value. These values can be accessed using these properties associated with them.


example :

var computer = new object;
computer.brand = hp;
computer.ram= 8gb;
computer.gen=11th gen;
computer.color= grey;

 After creating the object computer the values inside the objects can be accessed using key:

computer.ram

output : 8gb

To access the property of the object we can use (.)dot operator or [] operator.

computer.gen 
    or
computer["gen"]

The objects can be declared in the following methods
1.function(){return hello.in}
2.let bike = {name: 'bullet', brand:'Royal Enfield', engine:'350cc'};
3.function Vehicle(name, maker) {
   this.name = name;
   this.maker = maker;
   let car1 = new Vehicle(’Fiesta’, 'Ford’);
let car2 = new Vehicle(’ferrari’, 'GT-2’)
console.log(car1.name);  Output: Fiesta
console.log(car2.name);  Output:ferrari
}
4.var person = new Object();
person.firstName = “John”;
person.age = 50;
person.hairColor = “black”;
person.height=5.5
5.

*/
console.log("hi")