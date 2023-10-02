//////Block 1////////////
    
    function funcA() {
        console.log(a);// it's on the top of the scope and it will give us undefined. a has been declared but not assigned a value which will give us undefined.
        console.log(foo());
        var a = 1; //this won't affect anything since the value has been declared but it comes after the console. 
        function foo() {
        return 2;
        }
        }
        funcA();

        //solution:

        function funcA() {
            var a = 1; //the value of a is declared first
            function foo() {// here also the function is declared
                return 2;
            }
            console.log(a); // logs '1'- since we declared that it's value is 1- moved it out of the brackets
            console.log(foo()); // logs '2'- this one is obvious- the foo function is correct
        }
        funcA();
        /////////**************************************************************************************************************************////////////
        
        //////Block 2////////////
        var fullName = 'John Doe';
        var obj = {
        fullName: 'Colin Ihrig',
        prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
        return this.fullName;
        }
        }
        };
        console.log(obj.prop.getFullName());//this will give Rosa, because the prop is defined.
        var test = obj.prop.getFullName;
        console.log(test()); //this will return undefined because 
        /////////**************************************************************************************************************************////////////
        
        //////Block 3////////////

        function funcB() {
            let a = b = 0;
            a++;
            return a;
            }
            funcB();
            console.log(typeof a);// will get undefined since a was declared with let inside function funcb, it's not accesble in the bigger scope
            console.log(typeof b);// will get number since be is defined as b=0

            // solution:
            let a, b;
            function funcB() {
                a = b = 0;
                a++;
                return a;
            }
            funcB();
            console.log(typeof a); // Will be "number".
            console.log(typeof b); // Will also be "number"- why because both are decalred at the beggining in the global scope!

            