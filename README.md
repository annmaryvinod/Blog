# Blog
JS React


 FILES & FOLDERS:

1. node_modules : contains all project dependencies.

2. public : 
   
   * public to the browser 

   * "index.html" inside the public folder has a "div" of id="root" to which the component is rendered ("App" component inside the "index.js" within the src folder.)

   * The "App" component in the "index.js" file is rendered to the DOM means, the entire component "App" inside the "App.js" file is rendered to the DOM.


3. src

* it has the "index.js" file that kick starts the project.

<!-- //////////// -->

More Points 

1. jsx 

<img src = "images/jsx.png">

 * the syntax looks like html.

 * The transpiler called "babel" converts all the jsx into html on saving and is then rendered to the DOM.

 * In jsx class is added as "className" attribute. Not "class" since that is a reserved keyword in JS and the file is a js file.


 

 2. Component

 * It is basically a function.
 * It returns whatever is within the function usually a jsx template.
 * Then we export the component so that we can use it in other files. (see the export in the "App.js" and the import in the "index.js")


 * Component consists of two parts : 

   1. Template  : refers to the HTML content or structure
   2. Logic  : refers to the js functions or other functionality codes.




1. TEMPLATE 


* All the JS code should be before the "return" statement inside the App commponent in the App.js file. 
* This can include variables and other codes.

* variable initialisation : follows the usual trend as in JS.

* Using them in the "return" statement : USE CURLY BRACES {}

** Note : return statement returns jsx.
* React will identify the curly braces for variable and search for it inside the entire App component.

* inside curly braces, it is possible to write js codes directly.



* variables,strings,numbers,arrays etc. can be shown as output. Arrays are converted to strings.

* IT IS IMPOSSIBLE TO OUTPUT BOOLEANS AND OBJECTS ON SIMILAR GROUNDS!



* Attribute values can also be variables.








* COMPONENT TREE : 

<img src = "images/comptree.png>


