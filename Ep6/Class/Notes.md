## UseEffect Hook

Hook is basically JS function.
Two args - arrow function [call back function], dependency array

When call back function will be called?
After component renders
API call after rendering is complete. We can fetch data inside useEffect()
fetch is provided by browser which JS Engine has.

CORS policy - if origin mismatch we can't fetch api data

Why state variable required?
Eg -  
We need to flip login to logout whenever we click on login button.

const Header () => {
let btnName = "Login";
return(

<div className="nav-items">
<button className="login"
onClick = {() => {
btnName = "Logout";
}}>
{btnName}
</button>
</div>
)
}

But when clicked on button UI didn't update although btnName got updated. Here is where useState state variables come into picture.

so we will have
const [btnNameReact, setBtnNameReact] = useState("Login");

in onclick we will changesetBtnNameReact("Logout");

Whenever state varibales change, React will re-render the component and all updated values will be present.

although its const its get updated how?
Whenever we update value, basically re-rendering the component, and state variable will be a new variable before

So whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
